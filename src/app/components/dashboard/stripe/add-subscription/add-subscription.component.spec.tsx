import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { StripeWrapper } from '../wrapper/wrapper.component';
import { AddSubscription } from './add-subscription.component';

describe('AddCard', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <StripeWrapper>
                    <AddSubscription childID={1} />
                </StripeWrapper>
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
