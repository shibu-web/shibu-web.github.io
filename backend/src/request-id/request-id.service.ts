import { Injectable, Scope } from '@nestjs/common';
import { ulid } from 'ulidx';

@Injectable({ scope: Scope.REQUEST })
export class RequestIdService {
  private requestId: string;

  constructor() {
    this.requestId = ulid();
  }

  getRequestId(): string {
    return this.requestId;
  }
}
