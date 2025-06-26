import { Test, TestingModule } from '@nestjs/testing';
import { RequestIdService } from './request-id.service';
import { describe, it, expect, beforeEach } from 'vitest';

describe('RequestIdService', () => {
  let service: RequestIdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestIdService],
    }).compile();

    service = await module.resolve<RequestIdService>(RequestIdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
