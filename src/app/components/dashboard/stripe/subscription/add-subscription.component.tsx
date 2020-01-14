import React from 'react';
import { Button } from '@material-ui/core';
import { ReactStripeElements, injectStripe } from 'react-stripe-elements';
import { useHistory } from 'react-router';

interface AddSubscriptionProps {
    onComplete?: () => void;
}

const _AddSubscription: React.FC<AddSubscriptionProps &
    ReactStripeElements.InjectedStripeProps> = ({ stripe, onComplete }) => {
    const history = useHistory();
    const redirectButton = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        history.push('/dashboard');
    };

    return (
        <form onSubmit={redirectButton}>
            <Button type='submit' color='primary'>
                Subscribe
            </Button>
        </form>
    );
};

const AddSubscription = injectStripe(_AddSubscription);
export { AddSubscription };
