import React from 'react';
import { render } from '@testing-library/react';

import { StripeWrapper } from './wrapper.component';

describe('CheckoutPage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(<StripeWrapper />);
        expect(baseElement).toBeInTheDocument();
    });
});
