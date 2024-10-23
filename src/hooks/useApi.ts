import { useEffect, useState } from 'react';
import { get } from '../services/api';
import { AxiosResponse } from 'axios';

export const useGetApi = <T>(
  url: string,
  params?: any
): [T | any, boolean, Error | any] => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | any>(null);

  useEffect(() => {
    const subscription = get<T>(url, params).subscribe({
      next: (response: AxiosResponse<T>) => {
        setData(response.data);
        setLoading(false);
      },
      error: (err: Error) => {
        setError(err);
        setLoading(false);
      },
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [url]);

  return [data, loading, error];
};
