import React from 'react';
import { render } from '@testing-library/react';

import { DashboardPage } from './dashboard.page';
import { BrowserRouter } from 'react-router-dom';

describe('DashboardPage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <DashboardPage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
