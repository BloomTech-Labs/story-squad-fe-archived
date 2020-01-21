import React from 'react';
import { StripeWrapper, CardForm } from '../../..';
import { CardList } from '../card-list/card-list.component';
import { useAPI } from '../../../../hooks';
import { CreditCard } from '../../../../models';

const PaymentPicker: React.FC = () => {
    //check parent
    const { request, response } = useAPI<{ cards: CreditCard[] }>('/payment/cards');

    React.useEffect(() => {
        request();
    }, [request]);

    //add ability to submit and then load card list
    if (!response) {
        //if parent doesn't have a card
        return (
            <StripeWrapper>
                <CardForm />
            </StripeWrapper>
        );
    } else {
        //if parent has a card
        return <CardList />;

        //let parent pick default
    }
};

export { PaymentPicker };
