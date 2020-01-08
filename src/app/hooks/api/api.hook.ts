import { useState, useCallback } from 'react';
import { AxiosResponse } from 'axios';

import requestFactory from '../../util/requestFactory';

interface APIHook<T> {
    response: T | undefined;
    error: Error | undefined;
    loading: boolean;
    request: (...args: any) => Promise<void>;
}

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

/**
 * @description A hook setup to use API calls.
 * @template T The type of data expected to be returned.
 * @param {string} url The URL to request the data from.
 * @param {Method} [method='GET'] The REST method to use for the request, options include "GET", "POST", "PUT" and "DELETE"
 * @returns {APIHook<T>} The return of this hook has 4 parts in an object:
 * - `response` which is the most recently returned data.
 * - `error` which is any errors that occurred with the request, this is reset if a new request is made without errors.
 * - `loading` a boolean which represents if a request is in a pending state.
 * - `request()` a function that makes the request, any arguments passed in will be passed into the axios call.
 */
const useAPI = <T>(url: string, method: Method = 'GET'): APIHook<T> => {
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
                setError(err);
            }

            setLoading(false);
        },
        [method, url]
    );

    return { response, error, loading, request };
};

export { useAPI };
