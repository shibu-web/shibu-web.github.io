import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, Matches } from '@nestjs/class-validator';

export class TestPost {
  @ApiProperty({
    type: String,
    description: 'テスト用の文字列',
    example: 'test',
  })
  @IsString()
  testString: string;

  @ApiPropertyOptional({
    type: String,
    description: 'テスト用のアドレス',
    example: '0x1234567890abcdef',
    pattern: '^0x[a-fA-F0-9]{40}$',
  })
  @IsOptional()
  @IsString()
  @Matches(/^0x[a-fA-F0-9]{40}$/, {
    message: 'Ethereum(EVM)ウォレットアドレスの形式が正しくありません',
  })
  testAddress?: string;
}
