import React from 'react';

import { ErrorProvider } from './error/error.state';
import { PWAProvider } from './pwa/pwa.state';

const AppProvider: React.FC = ({ children }) => {
    return (
        <ErrorProvider>
            <PWAProvider>{children}</PWAProvider>
        </ErrorProvider>
    );
};

export { AppProvider };
export * from './error/error.state';
export * from './pwa/pwa.state';
