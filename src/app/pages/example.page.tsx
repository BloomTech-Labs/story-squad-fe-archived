import React from 'react';

import { ExampleComponent } from '../components/example/example.component';
import { PrivacyPolicy } from '../components/policies/privacy-policy.component';

const ExamplePage: React.FC = () => {
    return (
        <>
            <ExampleComponent />
            <PrivacyPolicy />
        </>
    );
};

export { ExamplePage };
