import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import { EditProfilePage } from './edit.page';

describe('App', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <EditProfilePage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
