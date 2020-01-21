import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { StripeWrapper } from '../../../../components';
import { AddSubscription } from '../../../../components/dashboard/stripe/subscription/add-subscription.component';

const SubscribePage: React.FC = () => {
    const history = useHistory();
    const { id } = useParams();
    const redirect = () => history.push('/dashboard');

    return (
        <StripeWrapper>
            <AddSubscription childID={Number(id)} onComplete={redirect} />
        </StripeWrapper>
    );
};

export { SubscribePage };
