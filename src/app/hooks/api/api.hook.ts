import { useState, useCallback, useEffect } from 'react';
import { AxiosResponse, AxiosError } from 'axios';

import requestFactory from '../../util/requestFactory';
import { displayError } from '../../state';

interface ErrorObject {
    [key: string]: string | string[];
}

interface APIHook<T> {
    response: T | undefined;
    error: ErrorObject | undefined;
    loading: boolean;
    request: (...args: any) => Promise<void>;
    reset: () => void;
}

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface Options {
    errors?: boolean;
    method?: Method;
}

const userFriendlyMessage = (error: any) => {
    if (error.message.map) {
        return error.message.map((error) => Object.values(error.constraints)).flat()[0];
    } else if (error.message) {
        return error.message;
    } else {
        return error.toString();
    }
};

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
const useAPI = <T = any>(
    url: string,
    options: Options = { errors: true, method: 'GET' }
): APIHook<T> => {
    const [response, setResponse] = useState<T>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<ErrorObject>();

    const reset = useCallback(() => {
        setResponse(undefined);
        setLoading(false);
        setError(undefined);
    }, []);

    const request = useCallback(
        async (...args) => {
            setLoading(true);

            const axios = requestFactory();
            let res: AxiosResponse<T>;

            try {
                switch (options.method) {
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

                setLoading(false);
                setResponse(res.data);
            } catch (err) {
                const error = err as AxiosError;
                setLoading(false);
                setError(error?.response?.data);
                setResponse(undefined);
                if (options.errors || options.errors === undefined)
                    displayError(userFriendlyMessage(error?.response?.data));
            }
        },
        [options.errors, options.method, url]
    );

    useEffect(() => {
        if (options.method === 'GET' || options.method === undefined) request();
    }, [options.method, request]);

    return { request, response, loading, error, reset };
};

export { useAPI };
