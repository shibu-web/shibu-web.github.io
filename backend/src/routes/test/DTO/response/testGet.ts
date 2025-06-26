import { ApiProperty } from '@nestjs/swagger';
import { IsPositive, IsInt, IsString } from '@nestjs/class-validator';

export class TestGet {
  @ApiProperty({
    type: 'string',
    description: 'テスト用の文字列',
    example: 'test',
  })
  @IsString()
  testString: string;

  @ApiProperty({
    type: 'integer',
    format: 'int32',
    description: 'テスト用の数字（自然数）',
    example: 123,
    minimum: 1,
  })
  @IsPositive()
  @IsInt()
  testNumber: number;
}
