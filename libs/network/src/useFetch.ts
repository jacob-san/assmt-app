import { useEffect, useState } from 'react';

type FetchStatus = 'idle' | 'loading' | 'success' | 'error';

interface FetchResult<T> {
  data: T | null;
  status: FetchStatus;
  error: Error | null;
}

const useFetch = <T>(url: string): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<FetchStatus>('idle');
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setStatus('loading');

      try {
        const response = await fetch(url);
        const jsonData = await response.json();

        if (isMounted) {
          setData(jsonData);
          setStatus('success');
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
          setStatus('error');
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, status, error };
};

export default useFetch;