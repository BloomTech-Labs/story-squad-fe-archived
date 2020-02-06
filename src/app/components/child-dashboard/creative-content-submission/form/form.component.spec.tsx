import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { CCSForm } from './form.component';
import { Child } from '../../../../models';

jest.mock('../../../../hooks/api/api.hook', () => ({
    useAPI: (path, method = 'GET') => [null, false, () => {}],
}));

const child = { cohort: { week: 1 } } as Child;

describe('CCSForm', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <Router>
                <CCSForm week={child.cohort.week} onUpdate={() => {}} />
            </Router>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
