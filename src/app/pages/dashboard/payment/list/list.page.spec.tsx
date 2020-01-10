import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { CardListPage } from './list.page';

describe('App', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <CardListPage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
