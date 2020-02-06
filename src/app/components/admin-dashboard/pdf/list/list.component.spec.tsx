import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { PdfList } from './list.component';

jest.mock('../../../../hooks/api/api.hook', () => ({
    useAPI: () => [
        {
            canon: [
                { week: 1, base64: 'test' },
                { week: 2, base64: 'test2' },
            ],
        },
        false,
        () => {},
    ],
}));

describe('PdfList', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <Router>
                <PdfList />
            </Router>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
