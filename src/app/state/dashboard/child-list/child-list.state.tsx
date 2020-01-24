import React from 'react';

import { Child } from '../../../models';
import { useAPI } from '../../../hooks';

let childListRefresh: () => void;

const ChildListContext = React.createContext<Child[]>([]);
const ChildListProvider: React.FC = ({ children }) => {
    const { request, response } = useAPI('/children/list');
    childListRefresh = request;

    React.useEffect(() => {
        request();
    }, [request]);

    return (
        <ChildListContext.Provider value={response?.children || []}>
            {children}
        </ChildListContext.Provider>
    );
};

export { ChildListContext, ChildListProvider, childListRefresh };
