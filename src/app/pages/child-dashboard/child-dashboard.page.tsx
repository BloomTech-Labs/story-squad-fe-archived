import React from 'react';

import { ChildCard, CurrentChapterLink, SimpleBottomNavigation } from '../../components';
import { Child } from '../../models';

const ChildDashboard: React.FC = () => {
    return (
        <div>
            {/* <ChildCard /> */}
            <CurrentChapterLink />
            <SimpleBottomNavigation />
        </div>
    );
};

export { ChildDashboard };
