import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { CCSForm } from './form.component';

jest.mock('../../../../hooks', () => ({
    useAPI: (path, method = 'GET') => ({
        request: () => {},
        response: null,
    }),
}));

describe('CCSForm', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <Router>
                <CCSForm user={{ week: 1 }} />
            </Router>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
