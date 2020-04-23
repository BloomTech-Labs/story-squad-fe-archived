import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { PrivacyPage } from './privacy-policy.page';

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
