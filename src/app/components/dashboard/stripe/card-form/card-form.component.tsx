import React from 'react';
import {
    ReactStripeElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    injectStripe,
} from 'react-stripe-elements';

import { Card, CardContent, CardHeader, CircularProgress, Fab, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import { useAPI } from '../../../../hooks';
import { Message } from '../../../../models';
import { StripeInput } from '../input/input.component';

const useStyles = makeStyles((theme) => ({
    header: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
    },
    content: {
        display: 'grid',
        gridGap: theme.spacing(3),
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
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
    const { request, response, loading } = useAPI<Message>('/payment/cards', { method: 'POST' });
    const [validForm, setValidForm] = React.useState({
        numberValid: false,
        expiryValid: false,
        cvcValid: false,
    });

    React.useEffect(() => {
        if (response && onAdded) onAdded();
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
