interface DataResponse<T> {
  data: T | T[];
  metadata?: any;
}

export interface IResponseType<T> {
  message?: string;
  data: T | T[] | DataResponse<T>;
}
