import React from 'react';

let displayError: (error: string | undefined) => void;

const ErrorContext = React.createContext<string | undefined>(undefined);
const ErrorProvider: React.FC = ({ children }) => {
    const [error, setError] = React.useState<string>();
    displayError = setError;

    return <ErrorContext.Provider value={error}>{children}</ErrorContext.Provider>;
};

export { ErrorContext, ErrorProvider, displayError };
