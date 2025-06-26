import { Global, Module } from '@nestjs/common';
import { NotionLoggingService } from './notion-logging.service';

@Global()
@Module({
  providers: [NotionLoggingService],
  exports: [NotionLoggingService],
})
export class NotionLoggingModule {}
