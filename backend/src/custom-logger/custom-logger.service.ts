import { Injectable, Scope, LoggerService } from '@nestjs/common';
import { Config, ENVIRONMENT } from 'src/config';
import { RequestIdService } from 'src/request-id/request-id.service';
import * as winston from 'winston';
import * as path from 'path';
import * as fs from 'fs';
import { DiscordWebhookTransportService } from './discordWebhookTransport.service';
import { NotionTransportService } from './notionTransport.service';
import { ulid } from 'ulidx';

@Injectable({ scope: Scope.REQUEST })
export class CustomLoggerService implements LoggerService {
  private logger: winston.Logger;

  constructor(
    private readonly requestIdService: RequestIdService,
    private readonly config: Config,
    private readonly notionTransport: NotionTransportService,
    private readonly discordWebhookTransport: DiscordWebhookTransportService,
  ) {
    const transports: winston.transport[] = [];

    // サーバーのコンソールで全てのログを見たい場合は以下を有効にする
    // transports.push(new winston.transports.Console());

    // 開発環境ではログをファイルに出力する
    if (this.config.ENVIRONMENT === ENVIRONMENT.DEVELOPMENT) {
      const logsDir = path.join(process.cwd(), 'logs');
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }

      transports.push(
        new winston.transports.File({
          filename: path.join(logsDir, 'development.log'),
        }),
      );
    }

    // Discordにログを送信する
    if (this.config.WINSTON_DISCORD_WEBHOOK_URL) {
      transports.push(this.discordWebhookTransport);
    }

    // Notionにログを送信する
    if (this.config.WINSTON_NOTION_DB_ID && this.config.WINSTON_NOTION_SECRET) {
      transports.push(this.notionTransport);
    }

    this.logger = winston.createLogger({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      transports,
    });
  }

  private addRequestIdToMetadata(metadata?: any): any {
    return {
      ...metadata,
      logId: ulid(),
      requestId: this.requestIdService.getRequestId(),
    };
  }

  log(message: string, metadata?: any) {
    this.logger.info(message, this.addRequestIdToMetadata(metadata));
  }

  error(message: string, trace?: any, metadata?: any) {
    this.logger.error(
      message,
      this.addRequestIdToMetadata({ ...metadata, ...trace }),
    );
  }

  warn(message: string, metadata?: any) {
    this.logger.warn(message, this.addRequestIdToMetadata(metadata));
  }

  debug(message: string, metadata?: any) {
    this.logger.debug(message, this.addRequestIdToMetadata(metadata));
  }

  verbose(message: string, metadata?: any) {
    this.logger.verbose(message, this.addRequestIdToMetadata(metadata));
  }
}
