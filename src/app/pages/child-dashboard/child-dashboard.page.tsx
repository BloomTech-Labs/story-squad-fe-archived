import React from 'react';

import { CurrentChapterLink, CreativeContentSubmission } from '../../components';

const ChildDashboard: React.FC = () => {
    return (
        <div>
            <CurrentChapterLink />
            <CreativeContentSubmission user={{ week: 5 }} />
        </div>
    );
};

export { ChildDashboard };
