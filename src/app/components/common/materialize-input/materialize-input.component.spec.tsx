import React from 'react';
import { render } from '@testing-library/react';

import { MaterializeInput } from './materialize-input.component';

const ExampleComponent = () => <></>;

describe('CheckoutPage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(<MaterializeInput component={ExampleComponent} />);
        expect(baseElement).toBeInTheDocument();
    });
});
