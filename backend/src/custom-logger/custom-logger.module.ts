import { DynamicModule, Module } from '@nestjs/common';
import { CustomLoggerService } from './custom-logger.service';
import { RequestIdService } from 'src/request-id/request-id.service';
import { DiscordWebhookTransportService } from './discordWebhookTransport.service';
import { NotionTransportService } from './notionTransport.service';

@Module({})
export class CustomLoggerModule {
  static forRoot(): DynamicModule {
    return {
      module: CustomLoggerModule,
      global: true,
      providers: [
        CustomLoggerService,
        RequestIdService,
        DiscordWebhookTransportService,
        NotionTransportService,
      ],
      exports: [CustomLoggerService, RequestIdService],
    };
  }
}
