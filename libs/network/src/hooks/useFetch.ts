import { useEffect, useState } from 'react';

export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

type FetchStatus = Status.IDLE | Status.LOADING | Status.SUCCESS | Status.ERROR;

interface FetchOptions {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
}

export interface FetchResult<T> {
  data: T | null;
  status: FetchStatus;
  error: Error | null;
}

const useFetch = <T>(): [
  (url: string, options?: FetchOptions) => Promise<void>,
  FetchResult<T>
] => {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<FetchStatus>(Status.IDLE);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (url: string, options: FetchOptions = {}) => {
    setStatus(Status.LOADING);

    try {
      const response = await fetch(url, options);
      const jsonData = await response.json();

      setData(jsonData);
      setStatus(Status.SUCCESS);
    } catch (error: any) {
      setError(error);
      setStatus(Status.ERROR);
    }
  };

  return [fetchData, { data, status, error }];
};

export default useFetch;
