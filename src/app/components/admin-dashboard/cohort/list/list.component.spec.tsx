import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { ListCohorts } from './list.component';

describe('CohortCreate', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <Router>
                <ListCohorts />
            </Router>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
