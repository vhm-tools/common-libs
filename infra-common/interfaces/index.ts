export interface IResponseType<T = object> {
  message?: string;
  code?: string;
  data?: T | T[];
  metadata?: any;
}
