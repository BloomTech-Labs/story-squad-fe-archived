import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { ErrorPage } from './error-page';

describe('ErrorPage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <ErrorPage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
