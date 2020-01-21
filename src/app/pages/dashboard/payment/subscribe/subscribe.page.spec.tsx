import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { SubscribePage } from './subscribe.page';

describe('SubscribePage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <SubscribePage />
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
