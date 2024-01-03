import { Module } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { TrpcRouter } from './trpc.router';

@Module({
  imports: [],
  providers: [
    TrpcService,
    {
      provide: TrpcRouter,
      useFactory: (trpcService: TrpcService) => new TrpcRouter(trpcService),
      inject: [TrpcService],
    },
  ],
})
export class TrpcModule {}
