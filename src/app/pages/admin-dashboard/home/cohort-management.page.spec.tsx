import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { CohortManagementPage } from '../cohort-management.page';

describe('CohortManagementPage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <CohortManagementPage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
