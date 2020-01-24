import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { ManageCohortPage } from './manage.page';

describe('CohortManagementPage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <ManageCohortPage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
