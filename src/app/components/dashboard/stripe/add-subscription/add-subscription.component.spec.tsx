import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { ChildListProvider } from '../../../../state';
import { StripeWrapper } from '../wrapper/wrapper.component';

import { AddSubscription } from './add-subscription.component';

describe('AddCard', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <StripeWrapper>
                    <ChildListProvider>
                        <AddSubscription childID={1} />
                    </ChildListProvider>
                </StripeWrapper>
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
