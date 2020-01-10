import React from 'react';
import {
    ReactStripeElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    injectStripe,
} from 'react-stripe-elements';

import { Button } from '@material-ui/core';

import { useAPI } from '../../../../hooks';
import { Message } from '../../../../models';
import { StripeInput } from '../input/input.component';

interface CardFormProps {
    onAdded?: () => void;
}

const _CardForm: React.FC<CardFormProps & ReactStripeElements.InjectedStripeProps> = ({
    stripe,
    onAdded,
}) => {
    // Todo: Handle Card Response
    // eslint-disable-next-line
    const { request, response } = useAPI<Message>('/payment/cards', 'POST');
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

    React.useEffect(() => {
        if (response?.message && onAdded) onAdded();
    }, [onAdded, response]);

    const { numberValid, expiryValid, cvcValid } = validForm;
    const isValid = numberValid && expiryValid && cvcValid;
    return (
        <div>
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

const CardForm = injectStripe(_CardForm);
export { CardForm };
