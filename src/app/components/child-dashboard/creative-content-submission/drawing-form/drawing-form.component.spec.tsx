import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { DrawingForm } from './drawing-form.component';
import { Child } from '../../../../models';

jest.mock('../../../../hooks/api/api.hook', () => ({
    useAPI: (path, method = 'GET') => [null, false, () => {}],
}));

const child = { cohort: { week: 1 } } as Child;

describe('DrawingForm', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <Router>
                <DrawingForm week={child.cohort.week} onUpdate={() => {}} />
            </Router>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
