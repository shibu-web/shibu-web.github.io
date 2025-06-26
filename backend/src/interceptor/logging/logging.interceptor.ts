import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { NotionLoggingService } from 'src/notion-logging/notion-logging.service';
import * as dotenv from 'dotenv';

dotenv.config();

/* eslint-disable */
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('Unyte-template-logger');

  constructor(private readonly notionLoggingService: NotionLoggingService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request: any = context.switchToHttp().getRequest();
    const response: any = context.switchToHttp().getResponse();
    const requestId =
      (request.headers['requestId'] as string | undefined) ?? 'no-request-id';
    const requestTime = Date.now();

    return next.handle().pipe(
      tap({
        next: (data) => {
          const executedTime = Date.now() - requestTime;
          this.logger.log(
            `|${requestId}| ${request.method} ${request.originalUrl} ${response.statusCode} ${request.ip} ${request.headers['user-agent']} ${executedTime}ms`,
          );
          if (
            process.env.INTERCEPTOR_NOTION_DB_ID &&
            process.env.INTERCEPTOR_NOTION_SECRET
          ) {
            this.notionLoggingService.createRequestLog({
              requestId: requestId,
              ip: request.ip ?? 'undefined',
              method: request.method,
              url: request.originalUrl,
              executedTime: executedTime,
              agent: request.headers['user-agent'] ?? 'undefined',
              status: response.statusCode,
              timestamp: new Date().toISOString(),
              request: request.body,
              response: data,
            });
          }
        },
        error: (error) => {
          const executedTime = Date.now() - requestTime;
          this.logger.error(
            `|${requestId}| ${request.method} ${request.originalUrl} ${response.statusCode} ${request.ip} ${request.headers['user-agent']} ${executedTime}ms ${JSON.stringify(error)}`,
          );
          if (
            process.env.INTERCEPTOR_NOTION_DB_ID &&
            process.env.INTERCEPTOR_NOTION_SECRET
          ) {
            this.notionLoggingService.createRequestLog({
              requestId: requestId,
              ip: request.ip ?? 'undefined',
              method: request.method,
              url: request.originalUrl,
              executedTime: executedTime,
              agent: request.headers['user-agent'] ?? 'undefined',
              status: response.statusCode,
              timestamp: new Date().toISOString(),
              request: request.body,
              response: error,
            });
          }
        },
      }),
    );
  }
}
