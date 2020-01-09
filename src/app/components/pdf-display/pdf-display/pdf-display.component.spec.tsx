import React from 'react';
import { render, act } from '@testing-library/react';

import requestFactory from '../../../util/requestFactory';
import { PdfDisplay } from './pdf-display.component';

jest.mock('react-router-dom', () => ({
    useParams: () => ({
        week: 1,
    }),
}));

jest.mock('../../../util/requestFactory', () => () => ({
    get: () =>
        Promise.resolve({
            data: {
                base64:
                    'JVBERi0xLjANCjEgMCBvYmo8PC9QYWdlcyAyIDAgUj4+ZW5kb2JqIDIgMCBvYmo8PC9LaWRzWzMgMCBSXS9Db3VudCAxPj5lbmRvYmogMyAwIG9iajw8L01lZGlhQm94WzAgMCAzIDNdPj5lbmRvYmoNCnRyYWlsZXI8PC9Sb290IDEgMCBSPj4=',
            },
        }),
}));

describe('PdfDisplay', () => {
    it('renders without errors', () => {
        const { baseElement } = render(<PdfDisplay />);
        expect(baseElement).toBeInTheDocument();
    });
});
