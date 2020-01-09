import React from 'react';
import { act, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { EditProfilePage } from './edit.page';

describe('App', () => {
    it('renders without errors', () => {
        act(() => {
            const { baseElement } = render(
                <BrowserRouter>
                    <EditProfilePage />
                </BrowserRouter>
            );
            expect(baseElement).toBeInTheDocument();
        });
    });
});
