import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { AdminHomePage } from './home.page';

jest.mock('../../../hooks', () => ({
    useAPI: () => ({
        request: () => {},
        response: {
            me: { id: 1, email: 'test', role: 'admin', validpass: true },
        },
    }),
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
