import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { ChildLink } from './link.component';

describe('ChildLink', () => {
    it('renders without errors', () => {
        const child = { id: 1, username: 'Sam', grade: 3, week: 0, subscription: true };
        const { baseElement } = render(
            <BrowserRouter>
                <ChildLink child={child} />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
