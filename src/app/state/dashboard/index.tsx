import React from 'react';

import { ParentProvider } from './parent/parent.state';
import { PaymentProvider } from './payment/payment.state';
import { ChildListProvider } from './child-list/child-list.state';

const DashboardProvider: React.FC = ({ children }) => {
    return (
        <ParentProvider>
            <PaymentProvider>
                <ChildListProvider>{children}</ChildListProvider>
            </PaymentProvider>
        </ParentProvider>
    );
};

export { DashboardProvider };
export * from './parent/parent.state';
export * from './payment/payment.state';
export * from './child-list/child-list.state';
