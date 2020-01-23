import React from 'react';
import { render } from '@testing-library/react';

import { CreditCard } from '../../../../models';
import { StripeCard } from './card.component';

describe('StripeCard', () => {
    it('renders without errors', () => {
        const card: CreditCard = {
            id: '',
            name: '',
            brand: '',
            last4: '',
            exp_month: 1,
            exp_year: 2001,
        };
        const { baseElement } = render(<StripeCard defaultCard={card.id} card={card} />);
        expect(baseElement).toBeInTheDocument();
    });
});
