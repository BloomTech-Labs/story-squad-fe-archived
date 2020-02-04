import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { AdminSignUpPage } from './admin-sign-up.page';

jest.mock('../../components', () => ({
    AdminSignUp: () => <div></div>,
}));

describe('AdminSignInPage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(<AdminSignUpPage />);
        expect(baseElement).toBeInTheDocument();
    });
});
