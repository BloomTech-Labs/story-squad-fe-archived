import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { AdminDashboardPage } from './admin-dashboard.page';

jest.mock('../../components', () => ({
    AdminNavigationDrawer: () => <div></div>,
    PdfCreate: () => <div></div>,
}));

jest.mock('./home/home.page', () => ({
    AdminHomePage: () => <div></div>,
}));

describe('AdminDashboardPage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <Router>
                <AdminDashboardPage />
            </Router>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
