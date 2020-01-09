import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { SignUpPage } from './sign-up.page';

describe('App', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <SignUpPage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
