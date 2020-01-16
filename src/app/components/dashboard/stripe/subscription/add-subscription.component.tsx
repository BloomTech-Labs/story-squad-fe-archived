import React from 'react';
import { Button, Radio, RadioGroup, FormLabel, FormControlLabel } from '@material-ui/core';
import { ReactStripeElements, injectStripe } from 'react-stripe-elements';
import { useHistory } from 'react-router';
import { useAPI, useForm } from '../../../../hooks';
interface AddSubscriptionProps {
    onComplete?: () => void;
    childID: {};
}

const _AddSubscription: React.FC<AddSubscriptionProps &
    ReactStripeElements.InjectedStripeProps> = ({ stripe, onComplete, childID }) => {
    const history = useHistory();
    const { request, response } = useAPI('/payment/subscribe', 'POST');
    const { handleInputChange, handleSubmitBuilder } = useForm({
        child: childID,
        plan: '',
    });

    const handleChange = handleSubmitBuilder(request);
    console.log('request', request);
    React.useEffect(() => {
        if (response) history.push('/dashboard');
    }, [history, response]);
    return (
        <form onSubmit={handleChange}>
            <FormLabel>Subscription Options</FormLabel>
            <RadioGroup
                defaultValue='plan_GVQ796LiwZugJ9'
                name='plans'
                onChange={handleInputChange('plan')}>
                <FormControlLabel
                    value='plan_GVQ796LiwZugJ9'
                    control={<Radio />}
                    label='Test Subscription - $1/month'
                />
                <FormControlLabel
                    value=''
                    control={<Radio />}
                    label='I do not wish to subscribe at this time'
                />
            </RadioGroup>

            <Button type='submit' color='primary'>
                Subscribe
            </Button>
        </form>
    );
};

const AddSubscription = injectStripe(_AddSubscription);
export { AddSubscription };
