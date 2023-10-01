import { NodeEnv } from '../enums';
import * as dotenv from 'dotenv';

dotenv.config();

const {
  PORT,
  NODE_ENV,
  REQ_LOGGING,
  DB_LOGGING,
  VHM_API_KEY,
  NOTIFICATION_HOST,
  NOTIFICATION_PORT,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST_DOCKER,
  POSTGRES_PORT_DOCKER,
  POSTGRES_DB,
  AUTH_SECRET,
  RABBITMQ_QUEUE,
  RABBITMQ_URL,
  RABBITMQ_USERNAME,
  RABBITMQ_PASSWORD,
  RABBITMQ_URL_DOCKER,
} = process.env;

if (NODE_ENV && !Object.values(NodeEnv).includes(NODE_ENV as NodeEnv)) {
  throw new Error('NODE_ENV must be either test, production or development');
}

if (!PORT) {
  throw new Error('PORT is not define');
}

if (!NOTIFICATION_HOST || !NOTIFICATION_PORT) {
  throw new Error('Notification config is not define');
}

if (
  !POSTGRES_HOST ||
  !POSTGRES_PORT ||
  !POSTGRES_DB ||
  !POSTGRES_PORT_DOCKER ||
  !POSTGRES_HOST_DOCKER
) {
  throw new Error('POSTGRES config is not define');
}

if (
  !RABBITMQ_QUEUE ||
  !RABBITMQ_URL ||
  !RABBITMQ_USERNAME ||
  !RABBITMQ_PASSWORD ||
  !RABBITMQ_URL_DOCKER
) {
  throw new Error('RabbitMQ config is not define');
}

if (!VHM_API_KEY) {
  throw new Error('API key config is not define');
}

export default {
  PORT,
  NODE_ENV,
  DB_LOGGING,
  REQ_LOGGING,
  NOTIFICATION_HOST,
  NOTIFICATION_PORT,
  VHM_API_KEY,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_HOST_DOCKER,
  POSTGRES_PORT_DOCKER,
  AUTH_SECRET,
  RABBITMQ_QUEUE,
  RABBITMQ_URL,
  RABBITMQ_USERNAME,
  RABBITMQ_PASSWORD,
  RABBITMQ_URL_DOCKER,
};
