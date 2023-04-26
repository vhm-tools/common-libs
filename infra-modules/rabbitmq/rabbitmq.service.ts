import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class RabbitMQService {
  constructor(
    @Inject()
    private rabbitmq: ClientProxy,
  ) {}

  send(pattern: Record<string, string> | string, data: any): Observable<void> {
    return this.rabbitmq.send(pattern, data);
  }

  emit(pattern: Record<string, string> | string, data: any): Observable<void> {
    return this.rabbitmq.emit(pattern, data);
  }
}
