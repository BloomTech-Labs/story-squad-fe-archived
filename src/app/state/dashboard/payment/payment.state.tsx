import React from 'react';

import { CreditCard } from '../../../models';
import { useAPI } from '../../../hooks';

let creditCardsRefresh: () => Promise<void>;

interface PaymentContextState {
    sources: CreditCard[] | undefined;
    default_source: string | undefined;
}

const PaymentContext = React.createContext<PaymentContextState>({
    sources: undefined,
    default_source: undefined,
});
const PaymentProvider: React.FC = ({ children }) => {
    const { request, response } = useAPI('/payment/cards');
    creditCardsRefresh = request;

    React.useEffect(() => {
        request();
    }, [request]);

    const state = { sources: response?.sources, default_source: response?.default_source };
    return <PaymentContext.Provider value={state}>{children}</PaymentContext.Provider>;
};

export { PaymentContext, PaymentProvider, creditCardsRefresh };
