import { Injectable } from '@nestjs/common';
import * as reqDto from './DTO/request';
import * as resDto from './DTO/response';

@Injectable()
export class TestService {
  testPost(
    reqDto: reqDto.TestGetPass,
    queryDto: reqDto.TestGetQuery,
  ): resDto.TestGet {
    return {
      testString: reqDto.testString,
      testNumber: queryDto.testNumber,
    };
  }
}
