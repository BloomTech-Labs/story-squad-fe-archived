import React from 'react';
import { render } from '@testing-library/react';

import { CardList } from './card-list.component';

describe('CheckoutPage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(<CardList />);
        expect(baseElement).toBeInTheDocument();
    });
});
