import React from 'react';

import { WelcomeCard, CurrentChapterLink, SimpleBottomNavigation } from '../../components';
import { Child } from '../../models';

const ChildDashboard: React.FC = () => {
    return (
        <div>
            <WelcomeCard />
            <CurrentChapterLink />
            <SimpleBottomNavigation />
        </div>
    );
};

export { ChildDashboard };
