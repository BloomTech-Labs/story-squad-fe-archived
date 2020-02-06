import React from 'react';

import { Parent } from '../../../models';
import { useAPI } from '../../../hooks';

const ParentContext = React.createContext<Parent | undefined>(undefined);
const ParentProvider: React.FC = ({ children }) => {
    const [response] = useAPI('/parents/me');

    return <ParentContext.Provider value={response?.me}>{children}</ParentContext.Provider>;
};

export { ParentContext, ParentProvider };
