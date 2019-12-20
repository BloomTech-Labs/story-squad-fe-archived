import { useState, useEffect, useCallback } from 'react';
import { AxiosResponse } from 'axios';

import requestFactory from '../util/requestFactory';

interface GetHook<T> {
    response: T | undefined;
    error: Error | undefined;
    loading: boolean;
    request: (...args: any) => Promise<void>;
}

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const useAPI = <T>(url: string, method: Method = 'GET'): GetHook<T> => {
    const [response, setResponse] = useState<T>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error>();

    const request = useCallback(
        async (...args) => {
            setLoading(true);

            const axios = requestFactory();
            let res: AxiosResponse<T>;

            try {
                switch (method) {
                    case 'PUT':
                        res = await axios.put<T>(url, ...args);
                        break;
                    case 'POST':
                        res = await axios.post<T>(url, ...args);
                        break;
                    case 'DELETE':
                        res = await axios.delete<T>(url, ...args);
                        break;
                    case 'GET':
                    default:
                        res = await axios.get<T>(url, ...args);
                        break;
                }
                setResponse(res.data);
            } catch (err) {
                console.log(err);
            }

            setLoading(false);
        },
        [method, url]
    );

    useEffect(() => {
        if (method === 'GET') request();
    }, [method, request]);

    return { response, error, loading, request };
};

export { useAPI };
