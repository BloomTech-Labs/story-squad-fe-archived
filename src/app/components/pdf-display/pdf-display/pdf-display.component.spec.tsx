import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';

import { useAPI } from '../../../hooks';
import { PDFDisplay } from './pdf-display.component';

jest.mock('../../../hooks/api/api.hook');
(useAPI as jest.Mock).mockReturnValue([
    {
        canon: {
            base64: 'some file',
        },
    },
    false,
    () => {},
]);

jest.mock('react-pdf', () => ({
    Document: () => <div></div>,
    Page: () => <div></div>,
}));

describe('PDFDisplay', () => {
    it('renders without errors', async () => {
        const { baseElement } = render(<PDFDisplay week={1} />);
        expect(baseElement).toBeInTheDocument();
    });
});
