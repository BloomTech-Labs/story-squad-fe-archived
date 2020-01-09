import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';

import { CheckoutForm } from '../components/stripe/checkout-form.component';

const CheckoutPage = () => {
    return (
        <StripeProvider
            apiKey={
                process.env.REACT_APP_STRIPE_KEY || 'pk_test_JF5xfRvewfyAeFPgugZCgIxM00sGTTerR8'
            }>
            <div className='example'>
                <h1>Subscribe to Story Squad</h1>
                <Elements>
                    <CheckoutForm />
                </Elements>
            </div>
        </StripeProvider>
    );
};

export { CheckoutPage };
