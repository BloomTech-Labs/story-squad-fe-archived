import React from 'react';
import { render } from '@testing-library/react';

import { SignUpPage } from './sign-up.page';
import { BrowserRouter } from 'react-router-dom';

describe('SignUpPage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <SignUpPage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
