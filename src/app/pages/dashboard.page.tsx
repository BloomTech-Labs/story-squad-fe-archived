import React from 'react';

import { Button } from '@material-ui/core';

import { User } from '../models';
import { useAPI } from '../hooks';
import { ParentCard } from '../components/dashboard/parent-card.component';
import { ChildrenList } from '../components/dashboard/children-list.component';

const DashboardPage: React.FC = () => {
    const { request, response: user } = useAPI('/parent/me');
    const logout = () => window.dispatchEvent(new Event('logout'));

    React.useEffect(() => {
        request();
    }, [request]);

    if (!user) return <div></div>;
    return (
        <div>
            <span>Dashboard</span>
            <Button onClick={logout}>Logout</Button>
            {/* <NavigationDrawer/> */}
            <ParentCard user={user} />
            <ChildrenList />
        </div>
    );
};

export { DashboardPage };
