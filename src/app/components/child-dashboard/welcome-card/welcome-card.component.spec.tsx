import React from 'react';
import { render } from '@testing-library/react';

import { WelcomeCard } from './welcome-card.component';

describe('WelcomeCard', () => {
    it('renders without errors', () => {
        const child = { id: 1, username: 'Sam', grade: 3, week: 0, subscription: true };
        const { baseElement } = render(<WelcomeCard child={child} />);
        expect(baseElement).toBeInTheDocument();
    });
});
