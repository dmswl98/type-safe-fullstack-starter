import { Injectable } from '@nestjs/common';
import { initTRPC } from '@trpc/server';

@Injectable()
export class TrpcService {
  readonly trpc;
  readonly procedure;
  readonly router;
  readonly mergeRouters;

  constructor() {
    this.trpc = initTRPC.create();
    this.procedure = this.trpc.procedure;
    this.router = this.trpc.router;
    this.mergeRouters = this.trpc.mergeRouters;
  }
}
