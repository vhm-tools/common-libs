import { ClientProvider, RmqOptions } from '@nestjs/microservices';

export interface AsyncOptions extends Pick<RmqOptions, 'options'> {
  useFactory?: (...args: any[]) => Promise<ClientProvider> | ClientProvider;
  inject?: any[];
}
