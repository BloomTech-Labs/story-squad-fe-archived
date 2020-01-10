import React from 'react';
import { act, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { CreateChildPage } from './create-child.page';

describe('CreateChildPage', () => {
    it('renders without errors', () => {
        act(() => {
            const { baseElement } = render(
                <BrowserRouter>
                    <CreateChildPage />
                </BrowserRouter>
            );
            expect(baseElement).toBeInTheDocument();
        });
    });
});
