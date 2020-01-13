import React from 'react';
import { render } from '@testing-library/react';

import { StripeWrapper } from '../wrapper/wrapper.component';
import { CardForm } from './card-form.component';

describe('CardForm', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <StripeWrapper>
                <CardForm />
            </StripeWrapper>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
