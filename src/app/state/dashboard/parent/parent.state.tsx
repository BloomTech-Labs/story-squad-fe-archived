import React from 'react';

import { Parent } from '../../../models';
import { useAPI } from '../../../hooks';

const ParentContext = React.createContext<Parent | undefined>(undefined);
const ParentProvider: React.FC = ({ children }) => {
    const { request, response } = useAPI('/parents/me');

    React.useEffect(() => {
        request();
    }, [request]);

    return <ParentContext.Provider value={response}>{children}</ParentContext.Provider>;
};

export { ParentContext, ParentProvider };
