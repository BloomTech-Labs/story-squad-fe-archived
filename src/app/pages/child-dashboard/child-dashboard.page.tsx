import React from 'react';

import {
    WelcomeCard,
    CurrentChapterLink,
    SimpleBottomNavigation,
    FanFictionUpload,
} from '../../components';
import { Child } from '../../models';

const ChildDashboard: React.FC = () => {
    return (
        <div>
            <WelcomeCard />
            <br></br>
            <CurrentChapterLink />
            <br></br>
            <FanFictionUpload />
            <br></br>
            <SimpleBottomNavigation />
        </div>
    );
};

export { ChildDashboard };
