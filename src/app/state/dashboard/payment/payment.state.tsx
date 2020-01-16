import React from 'react';

import { CreditCard } from '../../../models';
import { useAPI } from '../../../hooks';

let creditCardsRefresh: () => void;

const PaymentContext = React.createContext<CreditCard[]>([]);
const PaymentProvider: React.FC = ({ children }) => {
    const { request, response } = useAPI('/payment/cards');
    creditCardsRefresh = request;

    React.useEffect(() => {
        request();
    }, [request]);

    return <PaymentContext.Provider value={response?.cards}>{children}</PaymentContext.Provider>;
};

export { PaymentContext, PaymentProvider, creditCardsRefresh };
