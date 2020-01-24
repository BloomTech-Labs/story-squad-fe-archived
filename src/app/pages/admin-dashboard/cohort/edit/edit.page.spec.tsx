import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { EditCohortPage } from './edit.page';

describe('CohortManagementPage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <EditCohortPage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
