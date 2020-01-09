import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { SignIn } from './sign-in.component';

describe('App', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <SignIn />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
