import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ChildHomePage } from './child-home.page'
describe('ChildHomePage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <ChildHomePage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
