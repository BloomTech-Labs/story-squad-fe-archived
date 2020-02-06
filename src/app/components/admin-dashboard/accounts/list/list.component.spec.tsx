import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { AccountsList } from './list.component';

jest.mock('../../../../hooks', () => ({
    useAPI: () => [
        {
            admin: [
                { id: 1, email: 'test', role: 'admin', temptoken: null },
                { id: 2, email: 'test2', role: 'admin', temptoken: null },
            ],
        },
        false,
        () => {},
    ],
}));

describe('AccountsList', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <Router>
                <AccountsList />
            </Router>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
