import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class TestGetPass {
  @ApiProperty({
    type: String,
    description: 'テスト用の文字列',
    example: 'test',
  })
  @IsNotEmpty()
  @IsString()
  testString: string;
}

export class TestGetQuery {
  @ApiProperty({
    type: Number,
    description: '自然数',
    example: 123,
    minimum: 1,
  })
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  @IsInt()
  @IsPositive()
  testNumber: number;
}
