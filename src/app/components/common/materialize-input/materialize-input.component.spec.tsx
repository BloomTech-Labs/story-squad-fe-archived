import React from 'react';
import { render } from '@testing-library/react';

import { ExampleComponent } from '../../example';
import { MaterializeInput } from './materialize-input.component';

describe('CheckoutPage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(<MaterializeInput component={ExampleComponent} />);
        expect(baseElement).toBeInTheDocument();
    });
});
