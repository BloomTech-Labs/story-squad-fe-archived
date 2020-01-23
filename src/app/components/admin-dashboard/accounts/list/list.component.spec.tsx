import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { AccountsList } from './list.component';

jest.mock('../../../../hooks', () => ({
    useAPI: () => ({
        request: () => {},
        response: {
            admin: [
                { id: 1, email: 'test', role: 'admin', validpass: true },
                { id: 2, email: 'test2', role: 'admin', validpass: true },
            ],
        },
    }),
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
