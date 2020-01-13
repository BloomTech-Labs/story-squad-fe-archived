import React from 'react';
import { render } from '@testing-library/react';

import { ExampleComponent } from './example.component';

describe('ExampleComponent', () => {
    it('renders without errors', () => {
        const { baseElement } = render(<ExampleComponent />);
        expect(baseElement).toBeInTheDocument();
    });
});
