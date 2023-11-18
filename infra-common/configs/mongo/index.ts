import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import { isProduction } from '../../helpers';
import env from '../../environments';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions():
    | MongooseModuleOptions
    | Promise<MongooseModuleOptions> {
    const uri = isProduction ? env.MONGODB_URI : env.MONGODB_URI_DOCKER;
    return {
      uri,
      maxPoolSize: 2,
      dbName: process.env.MONGODB_DB || 'test',
    };
  }
}
