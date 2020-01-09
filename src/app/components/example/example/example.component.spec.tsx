import React from 'react';
import { render } from '@testing-library/react';

import { ExampleComponent } from './example.component';

describe('App', () => {
    it('renders without errors', () => {
        const { baseElement } = render(<ExampleComponent />);
        expect(baseElement).toBeInTheDocument();
    });
});
