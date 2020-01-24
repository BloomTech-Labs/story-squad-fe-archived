import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { ListCohort } from './list.component';

describe('CohortCreate', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <Router>
                <ListCohort />
            </Router>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
