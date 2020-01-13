import React from 'react';
import { useHistory } from 'react-router-dom';

import { StripeWrapper, CardForm } from '../../../../components';

const CardAddPage: React.FC = () => {
    const history = useHistory();
    const handleAdded = () => history.push('/dashboard/cards');

    return (
        <StripeWrapper>
            <CardForm onAdded={handleAdded} />
        </StripeWrapper>
    );
};

export { CardAddPage };
