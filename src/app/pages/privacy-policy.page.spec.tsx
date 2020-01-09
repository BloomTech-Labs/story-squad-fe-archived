import React from 'react';
import { render } from '@testing-library/react';

import { PrivacyPage } from './privacy-policy.page';
import { BrowserRouter } from 'react-router-dom';

describe('PrivacyPage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <PrivacyPage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
