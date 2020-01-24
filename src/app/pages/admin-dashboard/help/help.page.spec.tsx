import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { HelpPage } from './help.page';

describe('HelpPage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <HelpPage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
