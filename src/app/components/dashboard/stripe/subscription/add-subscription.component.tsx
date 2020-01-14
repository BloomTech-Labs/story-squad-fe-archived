import React from 'react';
import { Button } from '@material-ui/core';
import { ReactStripeElements, injectStripe } from 'react-stripe-elements';

interface AddSubscriptionProps {
    onComplete?: () => void;
}

const _AddSubscription: React.FC<AddSubscriptionProps &
    ReactStripeElements.InjectedStripeProps> = ({ stripe, onComplete }) => {
    // React.useEffect(() => {

    // });
    return (
        <form>
            <Button type='submit' color='primary'>
                Subscribe
            </Button>
        </form>
    );
};

const AddSubscription = injectStripe(_AddSubscription);
export { AddSubscription };
