import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CardListPage } from './list.page';

describe('App', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <script src='https://js.stripe.com/v3/'></script>
                <CardListPage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
