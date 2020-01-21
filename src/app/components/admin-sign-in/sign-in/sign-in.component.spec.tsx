import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { AdminSignIn } from './sign-in.component';

describe('AdminSignIn', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <Router>
                <AdminSignIn />
            </Router>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
