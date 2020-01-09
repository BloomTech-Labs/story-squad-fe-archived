import React from 'react';
import { render } from '@testing-library/react';

import { ExampleComponent } from '../../example';
import { StripeInput } from './input.component';

describe('CheckoutPage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(<StripeInput component={ExampleComponent} />);
        expect(baseElement).toBeInTheDocument();
    });
});
