import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { RequestIdService } from 'src/request-id/request-id.service';

@Injectable()
export class RequestIdMiddleware implements NestMiddleware {
  constructor(private readonly requestIdService: RequestIdService) {}

  use(req: Request, res: Response, next: () => void) {
    const requestId = this.requestIdService.getRequestId();
    req.headers['requestId'] = requestId;
    res.setHeader('X-Request-Id', requestId);
    next();
  }
}
