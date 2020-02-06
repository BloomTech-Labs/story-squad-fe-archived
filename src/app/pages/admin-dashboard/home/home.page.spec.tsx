import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { AdminHomePage } from './home.page';

jest.mock('../../../hooks/api/api.hook', () => ({
    useAPI: () => [
        {
            me: { id: 1, email: 'test', role: 'admin', validpass: true },
        },
        false,
        () => {},
    ],
}));

jest.mock('../../../components', () => ({
    PdfList: () => <div></div>,
    AccountsList: () => <div></div>,
}));

describe('AdminHomePage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <Router>
                <AdminHomePage />
            </Router>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
