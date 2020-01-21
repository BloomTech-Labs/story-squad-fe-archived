import React from 'react';
import { render } from '@testing-library/react';

import { ErrorProvider } from '../../../state';
import { ErrorHandler } from './error-handler.component';

describe('CheckoutPage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <ErrorProvider>
                <ErrorHandler />
            </ErrorProvider>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
