import React from 'react';
import {
    ReactStripeElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    injectStripe,
} from 'react-stripe-elements';
import { Card, CardContent, CardHeader, CircularProgress, Fab, Icon } from '@material-ui/core';
import { useAPI } from '../../../../hooks';
import { Message } from '../../../../models';
import { StripeInput } from '../input/input.component';
import { useStyles } from './card-form-styles';

interface CardFormProps {
    onAdded?: () => void;
}

const _CardForm: React.FC<CardFormProps & ReactStripeElements.InjectedStripeProps> = ({
    stripe,
    onAdded,
}) => {
    const classes = useStyles({});
    const [response, loading, request] = useAPI<Message>('/payment/cards', 'POST');
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

        request({ id: token.id });
    };

    const { numberValid, expiryValid, cvcValid } = validForm;
    const isValid = numberValid && expiryValid && cvcValid;
    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader className={classes.header} title='Add Payment Method' />
                <CardContent>
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
                </CardContent>
            </Card>
            <div className={classes.wrapper}>
                <Fab type='submit' color='primary' disabled={!isValid}>
                    <Icon>save</Icon>
                </Fab>
                {loading && <CircularProgress size={68} className={classes.buttonProgress} />}
            </div>
        </form>
    );
};

const CardForm = injectStripe(_CardForm);
export { CardForm };
