import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { CardAddPage } from './add.page';

describe('App', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <CardAddPage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
