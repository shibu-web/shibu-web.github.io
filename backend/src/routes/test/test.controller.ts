import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import * as reqDto from './DTO/request';
import * as resDto from './DTO/response';
import { CustomLoggerService } from 'src/custom-logger/custom-logger.service';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('test')
export class TestController {
  constructor(private readonly logger: CustomLoggerService) {}

  @Get(':testString')
  @ApiOkResponse({
    description: 'テスト用のGETリクエスト',
    type: resDto.TestGet,
  })
  testGet(
    @Param() param: reqDto.TestGetPass,
    @Query() query: reqDto.TestGetQuery,
  ): resDto.TestGet {
    this.logger.log('testGet', { ...param, ...query });
    return {
      testString: param.testString,
      testNumber: query.testNumber,
    };
  }

  @Post()
  @ApiOkResponse({
    description: 'テスト用のPOSTリクエスト',
    type: resDto.TestPost,
  })
  testPost(@Body() body: reqDto.TestPostBody): resDto.TestPost {
    this.logger.log('testPost', { ...body });
    return {
      testString: body.testString,
      testAddress: body.testAddress,
    };
  }
}
