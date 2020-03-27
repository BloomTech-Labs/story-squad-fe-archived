import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { PointDashboard } from './point-allocation-dashboard';

describe('PointDashboard', () => {
    it('renders without errors', () => {
        const child = {
            id: 1,
            username: 'Sam',
            grade: 3,
            subscription: true,
            cohort: {
                week: 0,
                dueDates: {
                    reading: '',
                    writing: '',
                    drawing: '',
                },
            },
            progress: {
                reading: false,
                writing: true,
                reading: false,
                teamReview: false,
                randomReview: false,
            },
        };
        const { baseElement } = render(
            <BrowserRouter>
                <PointDashboard child={child} />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
