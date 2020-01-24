import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { CCSForm } from './form.component';
import { Child } from '../../../../models';

jest.mock('../../../../hooks', () => ({
    useAPI: (path, method = 'GET') => ({
        request: () => {},
        response: null,
    }),
}));

const child = { cohort: { week: 1 } } as Child;

describe('CCSForm', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <Router>
                <CCSForm child={child} onUpdate={() => {}} />
            </Router>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
