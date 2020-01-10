import React from 'react';
import { render } from '@testing-library/react';

import { SignIn } from './sign-in.component';
import { BrowserRouter } from 'react-router-dom';

describe('SignIn', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <SignIn />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
