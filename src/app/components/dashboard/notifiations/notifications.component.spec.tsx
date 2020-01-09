import React from 'react';
import { render } from '@testing-library/react';

import { NotificationsCard } from './notifications.component';

describe('App', () => {
    it('renders without errors', () => {
        const { baseElement } = render(<NotificationsCard />);
        expect(baseElement).toBeInTheDocument();
    });
});
