import { RmqOptions, Transport } from '@nestjs/microservices';
import { isProduction } from '../../helpers';
import env from '../../environments';

const url = isProduction ? env.RABBITMQ_URL_DOCKER : env.RABBITMQ_URL;

export const RabbitMQConfig: RmqOptions = {
  transport: Transport.RMQ,
  options: {
    urls: [url],
    queue: env.RABBITMQ_QUEUE,
    noAck: false,
    prefetchCount: 1,
    queueOptions: {
      durable: false,
    },
    headers: { 'm-api-key': env.VHM_API_KEY },
  },
};
