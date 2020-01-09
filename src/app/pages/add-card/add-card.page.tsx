import React from 'react';

import { StripeWrapper, CardForm } from '../../components';

const AddCardPage: React.FC = () => {
    return (
        <StripeWrapper>
            <CardForm />
        </StripeWrapper>
    );
};

export { AddCardPage };
