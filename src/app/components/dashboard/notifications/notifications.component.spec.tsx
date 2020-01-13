import React from 'react';
import { render } from '@testing-library/react';

import { NotificationsCard } from './notifications.component';

describe('NotificationsCard', () => {
    it('renders without errors', () => {
        const { baseElement } = render(<NotificationsCard />);
        expect(baseElement).toBeInTheDocument();
    });
});
