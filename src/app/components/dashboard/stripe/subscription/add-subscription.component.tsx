import React from 'react';
import { ReactStripeElements, injectStripe } from 'react-stripe-elements';

interface AddSubscriptionProps {
    onComplete?: () => void;
}

const _AddSubscription: React.FC<AddSubscriptionProps & ReactStripeElements.InjectedStripeProps> = ({ stripe, onComplete })=> {
    return (
        null
    )
}

const AddSubscription = injectStripe(_AddSubscription)
export { AddSubscription }