import { RmqOptions, Transport } from '@nestjs/microservices';
import env from '@environments';

export const RabbitMQConfig: RmqOptions = {
  transport: Transport.RMQ,
  options: {
    urls: [env.RABBITMQ_URL],
    queue: env.RABBITMQ_QUEUE,
    noAck: false,
    queueOptions: {
      durable: false,
    },
  },
};
