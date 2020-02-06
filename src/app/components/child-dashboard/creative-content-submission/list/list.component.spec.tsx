import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { CCSList } from './list.component';

jest.mock('../../../../hooks', () => ({
    useAPI: (path, method = 'GET') => [null, false, () => {}],
}));

describe('CCSForm', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <Router>
                <CCSList />
            </Router>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
