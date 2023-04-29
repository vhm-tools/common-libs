import { RmqOptions, Transport } from '@nestjs/microservices';
import env from '@environments';

export const RabbitMQConfig: RmqOptions = {
  transport: Transport.RMQ,
  options: {
    urls: [env.RABBITMQ_URL],
    queue: env.RABBITMQ_QUEUE,
    noAck: false,
    prefetchCount: 1,
    queueOptions: {
      durable: false,
    },
    headers: { 'm-api-key': env.VHM_API_KEY },
  },
};
