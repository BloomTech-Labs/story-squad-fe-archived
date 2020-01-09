import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { PrivateRoute } from './private-route.component';
import { BrowserRouter } from 'react-router-dom';
const Component: React.FC = () => {
    return <div />;
};
describe('PrivateRoute', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <PrivateRoute redirect='' component={Component} />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
