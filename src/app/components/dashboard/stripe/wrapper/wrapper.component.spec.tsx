import React from 'react';
import { render } from '@testing-library/react';

import { StripeWrapper } from './wrapper.component';

describe('StripeWrapper', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <StripeWrapper>
                <></>
            </StripeWrapper>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
