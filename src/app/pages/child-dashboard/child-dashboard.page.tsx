import React from 'react';

import { CurrentChapterLink } from '../../components';
import {SimpleBottomNavigation} from '../../components/child-dashboard/navigation-bar/navigation-bar.component';


const ChildDashboard: React.FC = () => {
    return (
        <div>
            <CurrentChapterLink />
            {/* <SimpleBottomNavigation/> */}
        </div>
    );
};

export { ChildDashboard };
