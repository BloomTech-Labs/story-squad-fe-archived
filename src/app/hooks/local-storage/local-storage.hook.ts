import { useState } from 'react';

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
 */
const useLocalStorage = <T>(key: string, initialValue: T): LocalStorageHook<T> => {
    const parse = (item: string): T | null => {
        return initialValue instanceof String ? JSON.parse(item) : item;
    };

    const [value, setStoredValue] = useState<T | null>(() => {
        const item = localStorage.getItem(key);
        return item ? parse(item) : initialValue;
    });

    const setValue = (value: T) => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    const updateValue = () => {
        const stringyValue = localStorage.getItem(key);
        setStoredValue(stringyValue ? JSON.parse(stringyValue) : null);
    };

    const removeValue = () => {
        setStoredValue(null);
        localStorage.removeItem(key);
    };

    return { value, setValue, updateValue, removeValue };
};

export { useLocalStorage };
