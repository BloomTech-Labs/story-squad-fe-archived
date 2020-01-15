import React from 'react';
import { Button, RadioGroup } from '@material-ui/core';
import { ReactStripeElements, injectStripe } from 'react-stripe-elements';
import { useHistory } from 'react-router';
import { useAPI } from '../../../../hooks';
interface AddSubscriptionProps {
    onComplete?: () => void;
    childID: {};
}

const _AddSubscription: React.FC<AddSubscriptionProps &
    ReactStripeElements.InjectedStripeProps> = ({ stripe, onComplete, childID }) => {
    const history = useHistory();
    const { request, response } = useAPI('/payment/subscribe', 'POST');
    const redirectButton = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        history.push('/dashboard');
    };
    console.log('props', childID);
    return (
        <form onSubmit={redirectButton}>
            <RadioGroup></RadioGroup>

            <Button type='submit' color='primary'>
                Subscribe
            </Button>
        </form>
    );
};

const AddSubscription = injectStripe(_AddSubscription);
export { AddSubscription };
