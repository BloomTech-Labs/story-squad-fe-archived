import React from 'react';
import { render } from '@testing-library/react';

import { ToS } from './tos.component';

describe('ToS', () => {
    it('renders without errors', () => {
        const { baseElement } = render(<ToS />);
        expect(baseElement).toBeInTheDocument();
    });
});
