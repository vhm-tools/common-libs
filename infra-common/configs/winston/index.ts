import {
  WinstonModuleOptions,
  WinstonModuleOptionsFactory,
  utilities as nestWinstonModuleUtilities,
} from 'nest-winston';
import { format, Logform, transports } from 'winston';

const { NODE_ENV, APP_NAME } = process.env;

const formatter = (): Logform.Format => {
  if (NODE_ENV === 'dev') {
    return format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      nestWinstonModuleUtilities.format.nestLike(APP_NAME, {
        colors: true,
        prettyPrint: true,
      }),
    );
  }

  return format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
  );
};

export class WinstonConfigService implements WinstonModuleOptionsFactory {
  createWinstonModuleOptions():
    | WinstonModuleOptions
    | Promise<WinstonModuleOptions> {
    return {
      level: 'info',
      format: formatter(),
      transports: [new transports.Console()],
    };
  }
}
