import { DynamicModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitMQConfig } from '@infra-common';
import { AsyncOptions } from './types/async-option';

@Module({})
export class RabbitMQModule {
  static register(opts: AsyncOptions): DynamicModule {
    return {
      module: RabbitMQModule,
      imports: [
        ClientsModule.registerAsync([
          {
            name: 'RABBITMQ_CONNECTION',
            useFactory: function () {
              return {
                transport: Transport.RMQ,
                options: {
                  ...RabbitMQConfig.options,
                  ...opts.options,
                },
              };
            },
            inject: opts.inject,
          },
        ]),
      ],
    };
  }
}
