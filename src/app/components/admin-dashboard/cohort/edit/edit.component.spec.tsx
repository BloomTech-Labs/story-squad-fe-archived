import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { EditCohort } from './edit.component';

describe('CohortCreate', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <Router>
                <EditCohort />
            </Router>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
