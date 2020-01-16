import React from 'react';
import { render } from '@testing-library/react';

import { WelcomeCard } from './welcome-card.component';

describe('WelcomeCard', () => {
    it('renders without errors', () => {
        const { baseElement } = render(<WelcomeCard />);
        expect(baseElement).toBeInTheDocument();
    });
});
