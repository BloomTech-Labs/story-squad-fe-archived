import React from 'react';
import { ReactStripeElements, injectStripe } from 'react-stripe-elements';
import { useHistory } from 'react-router';
import {
    Card,
    CardContent,
    CardHeader,
    CircularProgress,
    Fab,
    FormLabel,
    FormControlLabel,
    Icon,
    Radio,
    RadioGroup,
} from '@material-ui/core';
import { childListRefresh } from '../../../../state';
import { useAPI, useForm } from '../../../../hooks';
import { useStyles } from './add-sub-styles';


interface AddSubscriptionProps {
    onComplete?: () => void;
    childID: number;
}

const _AddSubscription: React.FC<AddSubscriptionProps &
    ReactStripeElements.InjectedStripeProps> = ({ stripe, onComplete, childID }) => {
    const classes = useStyles({});
    const history = useHistory();
    const [response, loading, request] = useAPI('/payment/subscribe', 'POST');
    const { state, handleInputChange, handleSubmitBuilder } = useForm({
        childID,
        plan: '',
    });

    const handleChange = handleSubmitBuilder(({ plan, ...otherState }) => {
        if (plan === 'later') history.push('/dashboard');
        else request({ plan, ...otherState });
    });

    React.useEffect(() => {
        childListRefresh();
        if (response) history.push('/dashboard');
    }, [history, response]);

    const { plan } = state;
    return (
        <>
            <form onSubmit={handleChange}>
                <Card>
                    <CardHeader className={classes.header} title='Subscribe' />
                    <CardContent>
                        <FormLabel>Subscription Options</FormLabel>
                        <RadioGroup name='plans' value={plan} onChange={handleInputChange('plan')}>
                            <FormControlLabel
                                value='plan_GVQ796LiwZugJ9'
                                control={<Radio />}
                                label='Test Subscription - $1/month'
                            />
                            <FormControlLabel
                                value='later'
                                control={<Radio />}
                                label='Subscribe Later'
                            />
                        </RadioGroup>
                    </CardContent>
                </Card>

                <div className={classes.wrapper}>
                    <Fab disabled={loading} type='submit' color='primary'>
                        <Icon>add_shopping_cart</Icon>
                    </Fab>
                    {loading && <CircularProgress size={68} className={classes.buttonProgress} />}
                </div>
            </form>
        </>
    );
};

const AddSubscription = injectStripe(_AddSubscription);
export { AddSubscription };
