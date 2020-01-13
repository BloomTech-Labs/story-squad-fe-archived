import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';

const StripeWrapper: React.FC = ({ children }) => {
    return (
        <StripeProvider
            apiKey={
                process.env.REACT_APP_STRIPE_KEY || 'pk_test_JF5xfRvewfyAeFPgugZCgIxM00sGTTerR8'
            }>
            <Elements>{children}</Elements>
        </StripeProvider>
    );
};

export { StripeWrapper };
