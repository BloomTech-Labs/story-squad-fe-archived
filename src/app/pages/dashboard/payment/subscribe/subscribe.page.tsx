import React from 'react'
import { useHistory } from 'react-router-dom';
import { StripeWrapper} from '../../../../components'
import { AddSubscription} from '../../../../components/dashboard/stripe/subscription/add-subscription.component'


const SubscribePage: React.FC = () => {
    const history = useHistory();
    const redirect = () => history.push('/dashboard');

    return(
        <StripeWrapper>
            <AddSubscription onComplete={redirect} />
        </StripeWrapper>
    )
}

export { SubscribePage }