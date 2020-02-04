import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { AddAccount } from './add-account.component';

describe('AddAccount', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <Router>
                <AddAccount />
            </Router>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
