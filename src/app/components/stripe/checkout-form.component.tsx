import React from 'react';
import {
    ReactStripeElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    injectStripe,
} from 'react-stripe-elements';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { MaterializeInput } from '../../components/common/materialize-input.component';
import { useAPI } from '../../hooks/api/api.hook';
import { StripeInput } from './stripe-input.component';

const useStyles = makeStyles(() => ({
    addCard: {
        padding: 30,
    },
}));

const _CheckoutForm: React.FC<ReactStripeElements.InjectedStripeProps> = ({ stripe }) => {
    const classes = useStyles({});
    const { request, response } = useAPI('/payment/cards', 'POST');
    const [validForm, setValidForm] = React.useState({
        numberValid: false,
        expiryValid: false,
        cvcValid: false,
    });

    const handleChanges = (key: keyof typeof validForm) => (valid: boolean) => {
        setValidForm({ ...validForm, [key]: valid });
    };

    const submit = async () => {
        const { token } = await stripe!.createToken({ name: 'Name' });
        if (!token) return;

        request({ card: { id: token.id } });
    };

    const { numberValid, expiryValid, cvcValid } = validForm;
    const isValid = numberValid && expiryValid && cvcValid;
    return (
        <div className={classes.addCard}>
            <StripeInput
                label='Credit Card Number'
                component={CardNumberElement}
                onChange={handleChanges('numberValid')}
            />
            <StripeInput
                label='Expiration Date'
                component={CardExpiryElement}
                onChange={handleChanges('expiryValid')}
            />
            <StripeInput
                label='Security Code'
                component={CardCvcElement}
                onChange={handleChanges('cvcValid')}
            />
            <Button onClick={submit} disabled={!isValid}>
                Add Card
            </Button>
        </div>
    );
};

const CheckoutForm = injectStripe(_CheckoutForm);
export { CheckoutForm };
