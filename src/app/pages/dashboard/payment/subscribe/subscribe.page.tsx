import React from 'react'
import { useHistory } from 'react-router-dom';
import { StripeWrapper, AddSubscription } from '../../../../components'

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