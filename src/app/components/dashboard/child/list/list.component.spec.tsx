import React from 'react';
import { render } from '@testing-library/react';

import { ChildList } from './list.component';

describe('App', () => {
    it('renders without errors', () => {
        const { baseElement } = render(<ChildList />);
        expect(baseElement).toBeInTheDocument();
    });
});
