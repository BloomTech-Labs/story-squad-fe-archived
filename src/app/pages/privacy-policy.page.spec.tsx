import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import { PrivacyPage } from './privacy-policy.page';

describe('App', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <PrivacyPage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
