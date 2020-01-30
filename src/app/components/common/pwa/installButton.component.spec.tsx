import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { InstallButton } from './installButton.component';

describe('InstallButton', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <InstallButton />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
