import React from 'react';
import { StripeWrapper, CardForm } from '../../../../components';

const PaymentPicker: React.FC = () => {
    //if parent doesn't have a card
    return (
        <StripeWrapper>
            <CardForm />
        </StripeWrapper>
    );
};

export { PaymentPicker };
