import React from 'react';
import {
    ReactStripeElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    injectStripe,
} from 'react-stripe-elements';

import { CircularProgress, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import { useAPI } from '../../../../hooks';
import { Message } from '../../../../models';
import { StripeInput } from '../input/input.component';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));

interface CardFormProps {
    onAdded?: () => void;
}

const _CardForm: React.FC<CardFormProps & ReactStripeElements.InjectedStripeProps> = ({
    stripe,
    onAdded,
}) => {
    // Todo: Handle Card Response
    // eslint-disable-next-line
    const classes = useStyles({});
    const { request, response, loading } = useAPI<Message>('/payment/cards', 'POST');
    const [validForm, setValidForm] = React.useState({
        numberValid: false,
        expiryValid: false,
        cvcValid: false,
    });

    React.useEffect(() => {
        if (response?.message && onAdded) onAdded();
    }, [onAdded, response]);

    const handleChanges = (key: keyof typeof validForm) => (valid: boolean) => {
        setValidForm({ ...validForm, [key]: valid });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!stripe) return;

        const { token } = await stripe.createToken({ name: 'Name' });
        if (!token) return;

        request({ card: { id: token.id } });
    };

    const { numberValid, expiryValid, cvcValid } = validForm;
    const isValid = numberValid && expiryValid && cvcValid;
    return (
        <form onSubmit={handleSubmit}>
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
            <div className={classes.wrapper}>
                <Button type='submit' disabled={!isValid}>
                    Add Card
                </Button>
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
            </div>
        </form>
    );
};

const CardForm = injectStripe(_CardForm);
export { CardForm };
