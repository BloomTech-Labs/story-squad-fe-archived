import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { AdminSignUp } from './sign-up.component';

describe('AdminSignIn', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <Router>
                <AdminSignUp />
            </Router>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
