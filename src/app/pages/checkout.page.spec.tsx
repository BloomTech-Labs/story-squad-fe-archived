import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CheckoutPage } from './checkout.page';

describe('CheckoutPage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <CheckoutPage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
