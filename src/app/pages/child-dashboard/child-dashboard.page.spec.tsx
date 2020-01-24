import React from 'react';
import { act, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { ChildDashboard } from './child-dashboard.page';

describe('ChildDashboard', () => {
    it('renders without errors', () => {
        act(() => {
            const { baseElement } = render(
                <BrowserRouter>
                    <ChildDashboard />
                </BrowserRouter>
            );
            expect(baseElement).toBeInTheDocument();
        });
    });
});
