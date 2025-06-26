import { Injectable } from '@nestjs/common';
import { Config } from 'src/config';
import { Client } from '@notionhq/client';
import { Throttle } from 'src/utils/throttle';

/* eslint-disable */

interface RequestLog {
  requestId: string;
  ip: string;
  method: string;
  url: string;
  executedTime: number;
  agent: string;
  status: number;
  timestamp: string;
  request: any;
  response: any;
}

@Injectable()
export class NotionLoggingService {
  private readonly secretKey: string;
  private readonly databaseId: string;
  private readonly notion: Client;
  private readonly throttle: Throttle;

  constructor(private readonly config: Config) {
    this.secretKey = this.config.INTERCEPTOR_NOTION_SECRET ?? '';
    this.databaseId = this.config.INTERCEPTOR_NOTION_DB_ID ?? '';
    this.notion = new Client({ auth: this.secretKey });
    this.throttle = new Throttle(10);
  }

  private splitContentIntoBlocks(content: string, title: string): any[] {
    const blocks: any[] = [];
    // Add title
    blocks.push({
      object: 'block',
      type: 'heading_2',
      heading_2: {
        rich_text: [{ type: 'text', text: { content: title } }],
      },
    });

    // Split content into chunks of 1999 characters
    const chunkSize = 1999;
    for (let i = 0; i < content.length; i += chunkSize) {
      blocks.push({
        object: 'block',
        type: 'paragraph',
        paragraph: {
          rich_text: [
            {
              type: 'text',
              text: { content: content.substring(i, i + chunkSize) },
            },
          ],
        },
      });
    }
    return blocks;
  }

  async createRequestLog(log: RequestLog) {
    if (!this.secretKey || !this.databaseId) return;
    if (log.url === '/favicon.ico') return;

    try {
      // Create initial page with basic properties
      const initialPage = await this.createInitialPage(log);

      // If the content is large, update the page with additional content
      if (initialPage) {
        await this.updatePageWithFullContent(initialPage.id, log);
      }
    } catch (error) {
      console.error(error);
    }
  }

  private createInitialPage(log: RequestLog) {
    const promiseGenerator = () => {
      return this.notion.pages.create({
        parent: { database_id: this.databaseId },
        properties: {
          requestId: {
            title: [{ text: { content: log.requestId ?? 'undefined' } }],
          },
          ip: {
            rich_text: [
              {
                type: 'text',
                text: { content: log.ip ?? 'undefined' },
              },
            ],
          },
          method: { select: { name: log.method } },
          url: {
            rich_text: [
              {
                type: 'text',
                text: { content: log.url ?? 'undefined' },
              },
            ],
          },
          executedTime: { number: log.executedTime },
          agent: {
            rich_text: [
              {
                type: 'text',
                text: { content: log.agent ?? 'undefined' },
              },
            ],
          },
          status: { select: { name: log.status.toString() } },
          timestamp: { date: { start: log.timestamp } },
        },
      });
    };

    return this.throttle.add(promiseGenerator, 'notion-logging');
  }

  private sanitizeContent(content: any): string {
    try {
      // オブジェクトや配列の場合はJSON文字列に変換
      if (typeof content !== 'string') {
        content = JSON.stringify(content, null, 2);
      }

      // nullやundefinedの場合は空文字を返す
      if (!content) return '';

      // 制御文字と不可視文字を除去
      content = content.replace(/[\x00-\x1F\x7F-\x9F\u200B-\u200D\uFEFF]/g, '');

      // 無効なUTF-8シーケンスを除去
      content = content.replace(
        /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
        '',
      );

      // 特殊な Unicode 文字を安全な文字に置換
      content = content.replace(/[\uFFFD\uFFFE\uFFFF]/g, ' ');

      // Zero-width joiners と variation selectors を除去
      content = content.replace(/[\u200D\uFE00-\uFE0F]/g, '');

      // 改行とタブを正規化
      content = content
        .replace(/\r\n/g, '\n')
        .replace(/\r/g, '\n')
        .replace(/\t/g, '    ');

      // 連続する空白を単一の空白に
      content = content.replace(/\s+/g, ' ');

      // ASCII以外の制御文字を除去
      content = content.replace(/[^\x20-\x7E\n\u0080-\uFFFF]/g, '');

      return content.trim();
    } catch (error) {
      console.error(`Sanitization error: ${error.message}`);
      return '';
    }
  }

  private async updatePageWithFullContent(pageId: string, log: RequestLog) {
    try {
      const reqBody = this.sanitizeContent(log.request);
      const resBody = this.sanitizeContent(log.response);

      const children = [
        ...this.splitContentIntoBlocks(reqBody, 'Request Body'),
        { object: 'block', type: 'divider', divider: {} },
        ...this.splitContentIntoBlocks(resBody, 'Response Body'),
      ];

      // Notionの1リクエストあたりのブロック制限（100）を考慮
      const chunkSize = 100;
      for (let i = 0; i < children.length; i += chunkSize) {
        const childrenChunk = children.slice(i, i + chunkSize);

        const promiseGenerator = () => {
          return this.notion.blocks.children.append({
            block_id: pageId,
            children: childrenChunk,
          });
        };

        await this.throttle.add(promiseGenerator, 'notion-logging');
      }
    } catch (error) {
      console.error(`Failed to update page content: ${error.message}`);
      if (error.body) {
        console.error(`API response: ${JSON.stringify(error.body)}`);
      }
      throw error;
    }
  }
}
