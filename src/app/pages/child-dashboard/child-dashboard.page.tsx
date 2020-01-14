import React from 'react';

import { CurrentChapterLink, SimpleBottomNavigation } from '../../components';

const ChildDashboard: React.FC = () => {
    return (
        <div>
            <CurrentChapterLink />
            <SimpleBottomNavigation />
        </div>
    );
};

export { ChildDashboard };
