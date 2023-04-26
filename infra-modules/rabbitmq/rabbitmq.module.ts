import { DynamicModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import {
  ClientProxyFactory,
  RmqOptions,
  Transport,
} from '@nestjs/microservices';
import { RabbitMQConfig } from '@infra-common';

@Module({})
export class RabbitMQModule {
  static register(service: string, options?: RmqOptions): DynamicModule {
    return {
      module: RabbitMQModule,
      providers: [
        {
          provide: service,
          useFactory: () => {
            return ClientProxyFactory.create({
              transport: Transport.RMQ,
              options: {
                ...RabbitMQConfig.options,
                ...options,
              },
            });
          },
        },
      ],
    };
  }
}
