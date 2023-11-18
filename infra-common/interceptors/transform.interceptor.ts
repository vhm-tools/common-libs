import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { MESSAGE_CODE } from '@infra-common/constants';
import { IResponseType } from '../interfaces';

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, IResponseType<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<IResponseType<T>> | Promise<Observable<IResponseType<T>>> {
    const response = context.switchToHttp().getResponse();

    // redirect route
    if (response.statusCode === HttpStatus.FOUND) {
      return next.handle();
    }

    return next.handle().pipe(
      map((data) => ({
        statusCode: response.statusCode,
        code: data?.code ?? MESSAGE_CODE.SUCCESS,
        message: data?.message,
        data: data?.data,
        metadata: data?.metadata,
      })),
    );
  }
}
