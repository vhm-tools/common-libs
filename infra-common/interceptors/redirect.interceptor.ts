import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import env from '../environments';

@Injectable()
export class RedirectInterceptor implements NestInterceptor {
  constructor(private readonly target?: string) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const response = context.switchToHttp().getResponse();
    response.redirect(this.target || `${env.CLIENT_URL}/admin`);
    return next.handle();
  }
}
