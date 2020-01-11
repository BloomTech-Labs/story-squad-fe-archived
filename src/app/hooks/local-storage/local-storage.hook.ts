import { useState, useCallback, useEffect } from 'react';

type LocalStorageHook<T> = {
    value: T | null;
    setValue: (value: T) => void;
    updateValue: () => void;
    removeValue: () => void;
};

/**
 * @description A hook used to store data in Local Storage
 * @template T The type of data being stored
 * @param {string} key The key to use in Local Storage
 * @param {T} initialValue The initial value of the data if it is not found in Local Storage
 * @returns {LocalStorageHook<T>} The return of this hook has four parts in an object:
 * - `value` the current value
 * - `setValue()` set the current value
 * - `updateValue()` refresh the current value from local storage
 * - `removeValue()` remove the current value including in local storage
 *
 * Note: This value will update automatically when other windows change the value, but manual updates must be done when changing within this applicaiton.
 * @see https://stackoverflow.com/questions/35865481/storage-event-not-firing
 */
const useLocalStorage = <T>(key: string, initialValue: T): LocalStorageHook<T> => {
    const parse = useCallback(
        (item: string): T | null => {
            return initialValue instanceof String ? JSON.parse(item) : item;
        },
        [initialValue]
    );

    const [value, setStoredValue] = useState<T | null>(() => {
        const item = localStorage.getItem(key);
        return item ? parse(item) : initialValue;
    });

    const setValue = useCallback(
        (value: T) => {
            setStoredValue(value);
            localStorage.setItem(key, JSON.stringify(value));
        },
        [key]
    );

    const updateValue = useCallback(() => {
        const stringyValue = localStorage.getItem(key);
        setStoredValue(stringyValue ? parse(stringyValue) : null);
    }, [key, parse]);

    const removeValue = useCallback(() => {
        setStoredValue(null);
        localStorage.removeItem(key);
    }, [key]);

    useEffect(() => {
        window.addEventListener('storage', updateValue);
        return () => window.removeEventListener('storage', updateValue);
    }, [updateValue]);

    return { value, setValue, updateValue, removeValue };
};

export { useLocalStorage };
