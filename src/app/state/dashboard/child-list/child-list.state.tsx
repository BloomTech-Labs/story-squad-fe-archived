import React from 'react';

import { Child } from '../../../models';
import { useAPI } from '../../../hooks';

let childListRefresh: () => Promise<void>;

const ChildListContext = React.createContext<Child[]>([]);
const ChildListProvider: React.FC = ({ children }) => {
    const [response, loading, request] = useAPI('/children/list');
    childListRefresh = request;

    return (
        <ChildListContext.Provider value={response?.children || []}>
            {children}
        </ChildListContext.Provider>
    );
};

export { ChildListContext, ChildListProvider, childListRefresh };
