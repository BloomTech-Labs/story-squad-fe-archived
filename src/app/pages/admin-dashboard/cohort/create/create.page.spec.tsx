import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { CreateCohortPage } from './create.page';

describe('CohortManagementPage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <CreateCohortPage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
