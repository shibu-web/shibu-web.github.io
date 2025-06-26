import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dotenvLoader, TypedConfigModule } from 'nest-typed-config';
import { Config } from './config';
import { TestModule } from './routes/test/test.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './interceptor/logging/logging.interceptor';
import { RequestIdMiddleware } from './middleware/request-id/request-id.middleware';
import { CustomLoggerModule } from './custom-logger/custom-logger.module';
import { NotionLoggingModule } from './notion-logging/notion-logging.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    TypedConfigModule.forRoot({
      schema: Config,
      load: dotenvLoader({
        envFilePath: '.env',
      }),
    }),
    CustomLoggerModule.forRoot(),
    TestModule,
    NotionLoggingModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdMiddleware).forRoutes('*');
  }
}
