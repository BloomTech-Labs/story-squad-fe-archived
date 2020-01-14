import React from 'react';
import { render } from '@testing-library/react';

import { WelcomeCard } from './welcome-card.component';

describe('WelcomeCard', () => {
    it('renders without errors', () => {
        const user = { email: 'test@mail.com' };
        const { baseElement } = render(<WelcomeCard child={child} />);
        expect(baseElement).toBeInTheDocument();
    });
});
