import { useState } from 'react';

type LocalStorageHook<T> = {
    storedValue: T | null;
    setValue: (value: T) => void;
    updateValue: () => void;
    removeValue: () => void;
};

interface LocalStorageHookOptions {
    objects: boolean;
}

const useLocalStorage = <T>(
    key: string,
    initialValue: T,
    options?: LocalStorageHookOptions
): LocalStorageHook<T> => {
    const parse = (item: string): T | null => {
        return options?.objects ? JSON.parse(item) : item;
    };

    const [storedValue, setStoredValue] = useState<T | null>(() => {
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

    return { storedValue, setValue, updateValue, removeValue };
};

export { useLocalStorage };
