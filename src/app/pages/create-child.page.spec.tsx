import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import { CreateChildPage } from './create-child.page';

describe('App', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <CreateChildPage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
