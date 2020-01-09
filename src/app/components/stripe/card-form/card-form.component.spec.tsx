import React from 'react';
import { render } from '@testing-library/react';

import { ExampleComponent } from '../../example';
import { CardForm } from './card-form.component';

describe('CheckoutPage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(<CardForm />);
        expect(baseElement).toBeInTheDocument();
    });
});
