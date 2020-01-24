import React from 'react';
import { render } from '@testing-library/react';

import { StripeInput } from './input.component';

const ExampleComponent = () => <></>;

describe('StripeInput', () => {
    it('renders without errors', () => {
        const { baseElement } = render(<StripeInput component={ExampleComponent} />);
        expect(baseElement).toBeInTheDocument();
    });
});
