import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { ModeratorDashboardPage } from '../admin-dashboard/moderator-dashboard.page';

describe('ModeratorDashboardPage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <ModeratorDashboardPage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
