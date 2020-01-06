import React from 'react';

const useForm = <S>(initial: S) => {
    const [state, setState] = React.useState<S>(initial);

    const handleStringChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
        setState({ ...state, [key]: e.target.value });

    const handleBoolChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
        setState({ ...state, [key]: e.target.checked });

    const handleSubmitBuilder = (callback: (state: S) => void) => (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        callback(state);
    };

    return { state, handleBoolChange, handleStringChange, handleSubmitBuilder };
};

export { useForm };
