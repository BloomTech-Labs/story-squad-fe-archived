import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { StripeWrapper, AddSubscription } from '../../../../components';

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
