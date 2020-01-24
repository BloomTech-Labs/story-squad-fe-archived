import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { CreateCohort } from './create.component';

describe('CohortCreate', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <Router>
                <CreateCohort />
            </Router>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
