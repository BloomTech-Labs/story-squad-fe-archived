import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { ChildCard } from './card.component';

describe('ChildCard', () => {
    it('renders without errors', () => {
        const child = { id: 1, username: 'Sam', grade: 3, week: 4, subscription: true };
        const { baseElement } = render(
            <BrowserRouter>
                <ChildCard child={child} />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
