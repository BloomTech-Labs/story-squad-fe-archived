import React from 'react';
import { render } from '@testing-library/react';

import { ToSPage } from './tos.page';
import { BrowserRouter } from 'react-router-dom';

describe('ToS', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <ToSPage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
