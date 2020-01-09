import React from 'react';
import {
    ReactStripeElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    injectStripe,
} from 'react-stripe-elements';

import { Button } from '@material-ui/core';
import { MaterializeInput } from '../../components/common/materialize-input.component';

import { useAPI } from '../../hooks/api/api.hook';

const _CheckoutForm: React.FC<ReactStripeElements.InjectedStripeProps> = ({ stripe }) => {
    const { request, response } = useAPI('/payment/cards', 'POST');

    const submit = async () => {
        const { token } = await stripe!.createToken({ name: 'Name' });
        if (!token) return;

        request({ card: { id: token.id } });
    };

    return (
        <div className='checkout'>
            <MaterializeInput label='Credit Card Number' component={CardNumberElement} />
            <MaterializeInput label='Expiration Date' component={CardExpiryElement} />
            <MaterializeInput label='Security Code' component={CardCvcElement} />
            <Button onClick={submit}>Add Card</Button>
        </div>
    );
};

const CheckoutForm = injectStripe(_CheckoutForm);
export { CheckoutForm };
