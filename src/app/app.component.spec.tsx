import React from 'react';
import { render } from '@testing-library/react';

import { App } from './app.component';

describe('App', () => {
    it('renders without errors', () => {
        const { baseElement } = render(<App />);
        expect(baseElement).toBeInTheDocument();
    });
});
