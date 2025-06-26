import { RequestIdMiddleware } from './request-id.middleware';
import { RequestIdService } from 'src/request-id/request-id.service';
import { describe, it, expect, vi } from 'vitest';

describe('RequestIdMiddleware', () => {
  it('should be defined', () => {
    const mockRequestIdService = {
      getRequestId: vi.fn().mockReturnValue('test-request-id'),
    } as unknown as RequestIdService;

    expect(new RequestIdMiddleware(mockRequestIdService)).toBeDefined();
  });
});
