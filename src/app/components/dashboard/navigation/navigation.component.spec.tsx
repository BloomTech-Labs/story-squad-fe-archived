import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { NavigationDrawer } from './navigation.component';

describe('NavigationDrawer', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <NavigationDrawer />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
