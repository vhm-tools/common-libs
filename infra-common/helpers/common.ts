import env from '../environments';
import { NodeEnv } from '../enums/environment';
import { LogLevel } from '@nestjs/common';

export const getEnv = (): NodeEnv | undefined => env.NODE_ENV as NodeEnv;
export const isProduction = getEnv() === NodeEnv.PRODUCTION;

export const getLogsLevel = (): LogLevel[] => {
  if (isProduction) {
    return ['log', 'error', 'warn'];
  }

  return ['log', 'error', 'warn', 'debug', 'verbose'];
};
