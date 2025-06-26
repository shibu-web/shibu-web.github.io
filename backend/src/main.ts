import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json } from 'express';
import { Config, ENVIRONMENT } from './config';
import * as yaml from 'yaml';
import * as fs from 'fs/promises';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // グローバルプレフィックスを設定
  app.setGlobalPrefix('api/v1');

  const config = app.get(Config);

  // DTOのバリデーションを有効化
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      enableDebugMessages: true,
      validateCustomDecorators: true,
    }),
  );

  // リクエストのJSONボディのサイズを50MBに制限
  app.use(json({ limit: '50mb' }));

  // CORSの設定
  const origin =
    config.CORS_ORIGIN.split(',').length === 1
      ? config.CORS_ORIGIN
      : config.CORS_ORIGIN.split(',').map((origin) => origin.trim());
  app.enableCors({
    origin: origin,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Access-Control-Allow-Origin',
    ],
    exposedHeaders: ['Access-Control-Allow-Origin'],
  });

  // Swaggerの設定
  const documentBuilder = new DocumentBuilder()
    .setTitle('Unyte Sample API')
    .setDescription('API description')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        'x-tokenName': 'Authorization',
      },
      'SampleAuthorization',
    )
    .build();
  const document = SwaggerModule.createDocument(app, documentBuilder);
  if (config.ENVIRONMENT == ENVIRONMENT.DEVELOPMENT) {
    SwaggerModule.setup('api', app, document);
  }
  const yamlDocument = yaml.stringify(document);
  const openApiPath = path.join(__dirname, '../openapi.yaml');
  await fs.writeFile(openApiPath, yamlDocument);

  // サーバーの起動
  await app.listen(config.PORT);
}

bootstrap();
