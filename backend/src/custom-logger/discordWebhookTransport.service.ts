import * as WinstonTransport from 'winston-transport';
import { Injectable } from '@nestjs/common';
import { Config } from 'src/config';

/* eslint-disable */

interface WinstonDiscordWebhookTransportLogData {
  level: string;
  message: string;
  timestamp: string;

  [key: string]: any; // その他のメタデータのために追加
}

@Injectable()
export class DiscordWebhookTransportService extends WinstonTransport.default {
  private readonly retryCount: number;
  private queue: WinstonDiscordWebhookTransportLogData[];
  private isProcessing: boolean;
  private batchTimeout: ReturnType<typeof setTimeout> | null;
  private readonly BATCH_INTERVAL = 5000; // 5秒
  private readonly MAX_BATCH_SIZE = 10; // 最大バッチサイズ
  private readonly MAX_MESSAGE_LENGTH = 2000;
  private readonly DISCORD_WEBHOOK_URL: string;

  constructor(private readonly config: Config) {
    super();
    this.retryCount = 5;
    this.queue = [];
    this.isProcessing = false;
    this.batchTimeout = null;
    this.DISCORD_WEBHOOK_URL = this.config.WINSTON_DISCORD_WEBHOOK_URL ?? '';
  }

  log(info: Record<string, any>, callback: () => void) {
    setImmediate(() => {
      this.emit('logged', info);
    });

    const logData: WinstonDiscordWebhookTransportLogData = {
      level: typeof info.level === 'string' ? info.level : 'info',
      message: typeof info.message === 'string' ? info.message : '',
      timestamp: new Date().toISOString(),
      ...info,
    };

    this.queue.push(logData);
    this.scheduleBatchProcess();

    callback();
  }

  private scheduleBatchProcess() {
    if (this.batchTimeout) return;

    this.batchTimeout = setTimeout(() => {
      this.processQueue();
      this.batchTimeout = null;
    }, this.BATCH_INTERVAL);
  }

  private splitMessage(content: string): string[] {
    const messages: string[] = [];
    let currentMessage = '';

    // JSONデータを改行で分割
    const lines = content.split('\n');

    for (const line of lines) {
      // 現在のメッセージに新しい行を追加した場合の長さをチェック
      if ((currentMessage + line + '\n').length > this.MAX_MESSAGE_LENGTH) {
        // 現在の行自体が制限を超える場合は、さらに分割
        if (line.length > this.MAX_MESSAGE_LENGTH) {
          if (currentMessage) {
            messages.push(currentMessage.trim());
            currentMessage = '';
          }

          // 長い行を分割
          let remainingLine = line;
          while (remainingLine.length > 0) {
            const chunk = remainingLine.slice(0, this.MAX_MESSAGE_LENGTH);
            messages.push(chunk);
            remainingLine = remainingLine.slice(this.MAX_MESSAGE_LENGTH);
          }
        } else {
          // 現在のメッセージを保存し、新しいメッセージを開始
          messages.push(currentMessage.trim());
          currentMessage = line + '\n';
        }
      } else {
        currentMessage += line + '\n';
      }
    }

    // 残りのメッセージを追加
    if (currentMessage) {
      messages.push(currentMessage.trim());
    }

    return messages;
  }

  private async sendLogs(
    logs: WinstonDiscordWebhookTransportLogData[],
    attempt = 1,
  ): Promise<void> {
    try {
      const content = logs
        .map((log) => JSON.stringify(log, null, 2))
        .join('\n\n');
      const messages = this.splitMessage(content);

      for (const message of messages) {
        const response = await fetch(this.DISCORD_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: 'Logger',
            content: message,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      }
    } catch (error) {
      if (attempt < this.retryCount) {
        await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
        return this.sendLogs(logs, attempt + 1);
      }
      throw error;
    }
  }

  private async processQueue() {
    if (this.isProcessing || this.queue.length === 0) return;

    this.isProcessing = true;

    while (this.queue.length > 0) {
      const batch = this.queue.splice(0, this.MAX_BATCH_SIZE);
      try {
        await this.sendLogs(batch);
      } catch (error) {
        console.error('Error processing queue:', error);
        this.queue.unshift(...batch);
        break;
      }
    }

    this.isProcessing = false;
  }
}
