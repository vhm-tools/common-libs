import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import env from '@environments';

@Injectable()
export class AuthCallGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const ctx = context.switchToRpc().getContext();
    const key = this.extractTokenFromRabbitMQ(ctx.args);

    if (!key || key !== env.VHM_API_KEY) {
      throw new RpcException('Api key invalid');
    }

    return true;
  }

  private extractTokenFromRabbitMQ(args: any): string | undefined {
    const { properties } = args[0];
    const apiKey = properties.headers['m-api-key'];

    return apiKey;
  }
}
