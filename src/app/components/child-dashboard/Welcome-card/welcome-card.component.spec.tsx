import React from 'react';
import { render } from '@testing-library/react';

import { ChildCard } from './welcome-card.component';

describe('ParentCard', () => {
    it('renders without errors', () => {
        const user = { email: 'test@mail.com' };
        const { baseElement } = render(<ChildCard child={child} />);
        expect(baseElement).toBeInTheDocument();
    });
});
