import React from 'react';

import { ChildCard } from '../components/dashboard/child-card.component';

const ChildPage: React.FC = () => {
    const child = {
        username: 'Tom',
    };

    return <ChildCard child={child} />;
};

export { ChildPage };
