import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

import { AdminSignInPage } from './admin-sign-in.page';

jest.mock('../../../components', () => ({
    AdminSignIn: () => <div></div>,
}));

describe('AdminSignInPage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(<AdminSignInPage />);
        expect(baseElement).toBeInTheDocument();
    });
});
