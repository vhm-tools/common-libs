export interface IResponseType<T> {
  message?: string;
  data: T | T[];
  metadata?: any;
}
