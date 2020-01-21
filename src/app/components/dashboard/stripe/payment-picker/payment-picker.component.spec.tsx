import React from 'react';
import { render } from '@testing-library/react';

import { PaymentPicker } from './payment-picker.component';

describe('Payment Picker', () => {
    it('renders without errors', () => {
        const { baseElement } = render(<PaymentPicker />);
        expect(baseElement).toBeInTheDocument();
    });
});
