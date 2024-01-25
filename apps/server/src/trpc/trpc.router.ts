import { INestApplication, Injectable } from '@nestjs/common';
import * as trpcExpress from '@trpc/server/adapters/express';
import { z } from 'zod';
import { TrpcService } from './trpc.service';

@Injectable()
export class TrpcRouter {
  private readonly trpcService: TrpcService;
  private readonly appRouter;

  constructor(trpcService: TrpcService) {
    this.trpcService = trpcService;

    this.appRouter = this.trpcService.router({
      greeting: this.trpcService.procedure
        .input(z.object({ name: z.string().optional() }))
        .query(({ input }) => {
          return { message: `Welcome! ${input.name ? input.name : 'cje'}` };
        }),
    });
  }

  async applyMiddleware(app: INestApplication) {
    app.use(
      '/trpc',
      trpcExpress.createExpressMiddleware({ router: this.appRouter }),
    );
  }
}

export type AppRouter = TrpcRouter['appRouter'];
