import React from 'react';
import { render } from '@testing-library/react';

import { Heading } from './heading.component';

describe('Heading', () => {
    it('renders without errors', () => {
        const { baseElement } = render(<Heading />);
        expect(baseElement).toBeInTheDocument();
    });
});
