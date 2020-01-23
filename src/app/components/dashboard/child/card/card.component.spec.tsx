import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { ChildCard } from './card.component';

describe('ChildCard', () => {
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
                <ChildCard child={child} />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
