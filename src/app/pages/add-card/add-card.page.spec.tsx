import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { AddCardPage } from './add-card.page';

describe('App', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <AddCardPage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
