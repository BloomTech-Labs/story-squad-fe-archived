import React from 'react';
import { render } from '@testing-library/react';

import { ParentCard } from './card.component';

describe('App', () => {
    it('renders without errors', () => {
        const user = { email: 'test@mail.com' };
        const { baseElement } = render(<ParentCard user={user} />);
        expect(baseElement).toBeInTheDocument();
    });
});
