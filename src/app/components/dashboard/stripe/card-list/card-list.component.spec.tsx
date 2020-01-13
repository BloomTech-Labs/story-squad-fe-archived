import React from 'react';
import { render } from '@testing-library/react';

import { CardList } from './card-list.component';

describe('CardList', () => {
    it('renders without errors', () => {
        const { baseElement } = render(<CardList />);
        expect(baseElement).toBeInTheDocument();
    });
});
