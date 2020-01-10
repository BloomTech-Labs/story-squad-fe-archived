import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { DashboardPage } from './dashboard.page';

describe('App', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <DashboardPage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
