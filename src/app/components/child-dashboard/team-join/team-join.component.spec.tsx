import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { TeamJoin } from './team-join.component';

describe('TeamJoin', () => {
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
                    submission: '',
                },
            },
            progress: {
                reading: false,
                writing: true,
                submission: false,
            },
        };
        const { baseElement } = render(
            <BrowserRouter>
                <TeamJoin child={child} />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
