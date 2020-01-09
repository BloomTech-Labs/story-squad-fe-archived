import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import { SignUp } from './sign-up.component';

describe('SignUp', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <SignUp form='' checkboxes='' />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
