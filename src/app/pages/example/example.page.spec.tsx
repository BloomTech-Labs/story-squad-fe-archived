import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { ExamplePage } from './example.page';

describe('ExamplePage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <ExamplePage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
