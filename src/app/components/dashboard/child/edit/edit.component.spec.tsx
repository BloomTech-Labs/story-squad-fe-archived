import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { ChildEdit } from './edit.component';

describe('ChildEdit', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <ChildEdit />
            </BrowserRouter>
        );

        expect(baseElement).toBeInTheDocument();
    });
});
