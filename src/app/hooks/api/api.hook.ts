import { useCallback, useEffect, useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';

import requestFactory from '../../util/requestFactory';
import { displayError } from '../../state';

interface ErrorObject {
    [key: string]: string | string[];
}

type APIHook<T> = [
    T | undefined,
    boolean,
    (...args: any) => Promise<void>,
    ErrorObject | undefined,
    () => void
];

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

/**
 * @description A hook setup to use API calls.
 * @template T The type of data expected to be returned.
 * @param {string} url The URL to request the data from.
 * @param {Method} [method='GET'] The REST method to use for the request, options include "GET", "POST", "PUT" and "DELETE"
 * @returns {APIHook<T>} The return of this hook has 4 parts in an array:
 * - `response` which is the most recently returned data.
 * - `loading` a boolean which represents if a request is in a pending state.
 * - `request()` a function that makes the request, any arguments passed in will be passed into the axios call.
 * - `error` which is any errors that occurred with the request, this is reset if a new request is made without errors.
 * - `reset()` a function that resets all errors and responses
 */
const useAPI = <T = any>(url: string, method: Method = 'GET', errors = true): APIHook<T> => {
    const [response, setResponse] = useState<T>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<ErrorObject>();

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
                const error = err as AxiosError;
                setError(error?.response?.data);
            }

            setLoading(false);
        },
        [method, url]
    );

    const reset = useCallback(() => {
        setResponse(undefined);
        setError(undefined);
        setLoading(false);
    }, []);

    useEffect(() => {
        if (method === 'GET') request();
    }, [method, request]);

    useEffect(() => {
        if (errors && typeof error?.message === 'string') displayError(error?.message);
        if (errors && !!error?.errors?.length) displayError(error?.errors[0]);
    }, [error, errors]);

    return [response, loading, request, error, reset];
};

export { useAPI };
