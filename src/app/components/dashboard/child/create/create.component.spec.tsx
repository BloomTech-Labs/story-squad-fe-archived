import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { ChildCreate } from './create.component';

describe('ChildCreate', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <ChildCreate />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
