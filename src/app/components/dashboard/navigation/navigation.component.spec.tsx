import React from 'react';
import { render } from '@testing-library/react';

import { NavigationDrawer } from './navigation.component';

describe('NavigationDrawer', () => {
    it('renders without errors', () => {
        const { baseElement } = render(<NavigationDrawer />);
        expect(baseElement).toBeInTheDocument();
    });
});
