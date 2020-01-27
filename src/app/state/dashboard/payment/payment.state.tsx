import React from 'react';

import { CreditCard, Customer } from '../../../models';
import { useAPI } from '../../../hooks';

let creditCardsRefresh: () => void | Promise<void>;

interface PaymentContextState {
    cards: CreditCard[] | undefined;
    customer: Customer | undefined;
}

const PaymentContext = React.createContext<PaymentContextState>({
    cards: undefined,
    customer: undefined,
});
const PaymentProvider: React.FC = ({ children }) => {
    const { request, response } = useAPI('/payment/cards');
    creditCardsRefresh = request;

    React.useEffect(() => {
        request();
    }, [request]);

    const state = { cards: response?.cards, customer: response?.customer };
    return <PaymentContext.Provider value={state}>{children}</PaymentContext.Provider>;
};

export { PaymentContext, PaymentProvider, creditCardsRefresh };
