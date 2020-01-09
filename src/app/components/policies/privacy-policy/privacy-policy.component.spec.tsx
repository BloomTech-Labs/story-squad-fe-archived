import React from 'react';
import { render } from '@testing-library/react';

import { PrivacyPolicy } from './privacy-policy.component';

describe('PrivacyPolicy', () => {
    it('renders without errors', () => {
        const { baseElement } = render(<PrivacyPolicy />);
        expect(baseElement).toBeInTheDocument();
    });
});
