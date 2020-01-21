import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { PdfCreate } from './create.component';

describe('PdfCreate', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <Router>
                <PdfCreate />
            </Router>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
