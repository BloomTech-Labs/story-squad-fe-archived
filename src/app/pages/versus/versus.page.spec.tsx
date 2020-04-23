import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { VersusPage } from './versus.page';
describe('VersusPage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <VersusPage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
