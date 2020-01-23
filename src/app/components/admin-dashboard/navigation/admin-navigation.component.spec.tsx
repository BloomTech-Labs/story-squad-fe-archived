import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { AdminNavigationDrawer } from './admin-navigation.component';

describe('AdminNavigationDrawer', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <Router>
                <AdminNavigationDrawer />
            </Router>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
