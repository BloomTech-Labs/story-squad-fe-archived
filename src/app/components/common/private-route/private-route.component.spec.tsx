import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { PrivateRoute } from './private-route.component';

const ExampleComponent = () => <></>;

describe('PrivateRoute', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <PrivateRoute redirect='/' component={ExampleComponent} />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
