import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { KidProgressCard } from './kid-progress.component';

describe('KidProgressCard', () => {
    it('renders without errors', () => {
        const child = { id: 1, username: 'Sam', grade: 3, week: 0 };
        const { baseElement } = render(
            <BrowserRouter>
                <KidProgressCard child={child} />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
