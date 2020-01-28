import React from 'react';
import { render } from '@testing-library/react';

import { PDFDisplay } from './display.component';

HTMLCanvasElement.prototype.getContext = jest.fn();
const document: any = {
    getPage: jest.fn().mockResolvedValue({
        getViewport: jest.fn(),
        render: jest.fn(),
    }),
};

describe('PDFDisplay', () => {
    it('renders without errors', async () => {
        const { baseElement } = render(<PDFDisplay page={1} scale={1.5} document={document} />);
        expect(baseElement).toBeInTheDocument();
    });
});
