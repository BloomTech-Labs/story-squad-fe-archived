import React from 'react';
import { act, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { ToSPage } from './tos.page';

describe('ToSPage', () => {
    it('renders without errors', () => {
        act(() => {
            const { baseElement } = render(
                <BrowserRouter>
                    <ToSPage />
                </BrowserRouter>
            );
            expect(baseElement).toBeInTheDocument();
        });
    });
});
