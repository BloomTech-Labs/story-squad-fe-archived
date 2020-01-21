import React from 'react';

import { ErrorProvider } from './error/error.state';

const AppProvider: React.FC = ({ children }) => {
    return <ErrorProvider>{children}</ErrorProvider>;
};

export { AppProvider };
export * from './error/error.state';
