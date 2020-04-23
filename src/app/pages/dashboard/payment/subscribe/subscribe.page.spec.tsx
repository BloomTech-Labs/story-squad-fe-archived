import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ChildListProvider } from '../../../../state';
import { SubscribePage } from './subscribe.page';

describe('SubscribePage', () => {
    it('renders without errors', () => {
        const { baseElement } = render(
            <BrowserRouter>
                <ChildListProvider>
                    <SubscribePage />
                </ChildListProvider>
            </BrowserRouter>
        );
        expect(baseElement).toBeInTheDocument();
    });
});
