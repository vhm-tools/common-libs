import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { IResponseType } from '../interfaces';

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, IResponseType<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<IResponseType<T>> | Promise<Observable<IResponseType<T>>> {
    return next.handle().pipe(
      map((data) => ({
        statusCode: context.switchToHttp().getResponse().statusCode,
        message: data.message,
        data: {
          data: data.data,
          metadata: data.metadata,
        },
      })),
    );
  }
}
