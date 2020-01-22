import React from 'react';
import { ReactStripeElements, injectStripe } from 'react-stripe-elements';
import { useHistory } from 'react-router';

import {
    Button,
    CircularProgress,
    FormLabel,
    FormControlLabel,
    Radio,
    RadioGroup,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import { childListRefresh } from '../../../../state';
import { useAPI, useForm } from '../../../../hooks';
import { displayError } from '../../../../state';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        height: 'fit-content',
        width: 'fit-content',
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

interface AddSubscriptionProps {
    onComplete?: () => void;
    childID: number;
}

const _AddSubscription: React.FC<AddSubscriptionProps &
    ReactStripeElements.InjectedStripeProps> = ({ stripe, onComplete, childID }) => {
    const classes = useStyles({});
    const history = useHistory();
    const { request, response, loading, error } = useAPI('/payment/subscribe', 'POST');
    const { state, handleInputChange, handleSubmitBuilder } = useForm({
        childID,
        plan: '',
    });

    const handleChange = handleSubmitBuilder(request);
    React.useEffect(() => {
        childListRefresh();
        if (response) history.push('/dashboard');
    }, [history, response]);

    React.useEffect(() => {
        if (typeof error?.message === 'string') displayError(error?.message);
    }, [error]);

    const { plan } = state;
    return (
        <>
            <form onSubmit={handleChange}>
                <FormLabel>Subscription Options</FormLabel>
                <RadioGroup name='plans' value={plan} onChange={handleInputChange('plan')}>
                    <FormControlLabel
                        value='plan_GVQ796LiwZugJ9'
                        control={<Radio />}
                        label='Test Subscription - $1/month'
                    />
                </RadioGroup>

                <div className={classes.wrapper}>
                    <Button disabled={loading} type='submit' color='primary'>
                        Subscribe
                    </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
                <Button onClick={() => history.push('/dashboard')}>Cancel</Button>
            </form>
        </>
    );
};

const AddSubscription = injectStripe(_AddSubscription);
export { AddSubscription };
