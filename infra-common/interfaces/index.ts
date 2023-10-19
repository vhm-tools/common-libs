interface DataResponse<T> {
  data: T | T[];
  metadata?: any;
}

export interface IResponseType<T> {
  statusCode: number;
  message?: string;
  data: DataResponse<T>;
}
