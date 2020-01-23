import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { CohortCreate } from './create-cohort.component';

describe('CohortCreate', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <Router>
                <CohortCreate />
            </Router>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
