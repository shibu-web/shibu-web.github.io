import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
} from '@nestjs/class-validator';

export enum ENVIRONMENT {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}

export class Config {
  @IsEnum(ENVIRONMENT)
  public readonly ENVIRONMENT!: ENVIRONMENT;
  @IsString()
  @Matches(
    /^(\*|(?:https?:\/\/|localhost:)[^,]*(?:,[^,]*(?:https?:\/\/|localhost:)[^,]*)*)$/,
    {
      message: 'CORS_ORIGIN は「*」かカンマ区切りの文字列である必要があります',
    },
  )
  public readonly CORS_ORIGIN!: string;

  @Type(() => Number)
  @IsNumber()
  public readonly PORT!: number;

  // データベース
  @IsString()
  @Matches(
    /^postgresql:\/\/(?:(?:[^:]+(?::[^@]*)?)@)?(?:[^:/#?]+)(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/,
    {
      message:
        'DATABASE_URL は有効な PostgreSQL 接続URI (例: postgresql://user:pass@host:port/db) である必要があります',
    },
  )
  public readonly DATABASE_URL!: string;

  // ログ関係の設定
  @IsOptional()
  @IsString()
  public readonly INTERCEPTOR_NOTION_DB_ID?: string;

  @IsOptional()
  @IsString()
  public readonly INTERCEPTOR_NOTION_SECRET?: string;

  @IsOptional()
  @IsUrl()
  public readonly WINSTON_DISCORD_WEBHOOK_URL?: string;

  @IsOptional()
  @IsString()
  public readonly WINSTON_NOTION_DB_ID?: string;

  @IsOptional()
  @IsString()
  public readonly WINSTON_NOTION_SECRET?: string;
}
