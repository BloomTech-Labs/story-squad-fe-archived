import React from 'react';
import { useHistory } from 'react-router-dom';

import { creditCardsRefresh } from '../../../../state';
import { StripeWrapper, CardForm } from '../../../../components';

const CardAddPage: React.FC = () => {
    const history = useHistory();
    const handleAdded = async () => {
        await creditCardsRefresh();
        history.push('/dashboard/cards');
    };

    return (
        <StripeWrapper>
            <CardForm onAdded={handleAdded} />
        </StripeWrapper>
    );
};

export { CardAddPage };
