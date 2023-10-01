import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import {
  SnakeCaseNamingStrategy,
  DatabaseLogger,
  isProduction,
} from '../../helpers';
import env from '../../environments';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    const host = isProduction ? env.POSTGRES_HOST_DOCKER : env.POSTGRES_HOST;
    const port = isProduction ? env.POSTGRES_PORT_DOCKER : env.POSTGRES_PORT;

    return {
      type: 'postgres',
      host,
      port: +port,
      username: env.POSTGRES_USER,
      password: env.POSTGRES_PASSWORD,
      database: env.POSTGRES_DB,
      entities: [
        `${__dirname}/**/entities/*.entity{.ts,.js}`,
        `dist/**/entities/*.entity{.ts,.js}`,
      ],
      namingStrategy: new SnakeCaseNamingStrategy(),
      autoLoadEntities: true,
      synchronize: false,
      logger: new DatabaseLogger(),
      logging: env.DB_LOGGING === 'true',
    };
  }
}
