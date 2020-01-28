import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';
import * as pdfjsLib from 'pdfjs-dist';

import { useAPI } from '../../../hooks';
import { PDFPages } from './pages.component';

jest.mock('../../../hooks/api/api.hook');
(useAPI as jest.Mock).mockReturnValue({
    request: async () => {},
    response: {
        canon: {
            base64: 'some file',
        },
    },
    loading: false,
    error: undefined,
});

jest.mock('pdfjs-dist');
(pdfjsLib.getDocument as jest.Mock).mockReturnValue({
    promise: Promise.resolve({ numPages: 1 }),
});

jest.mock('../display/display.component', () => ({
    PDFDisplay: () => <canvas></canvas>,
}));

describe('PDFPages', () => {
    it('renders without errors', async () => {
        const { baseElement } = render(<PDFPages week={1} />);
        await waitForDomChange({ container: baseElement });
        expect(baseElement).toBeInTheDocument();
    });
});
