import React from 'react';
import { Child, User } from '../models';
import { ParentCard } from '../components/dashboard/parent-card.component';
import { ChildCard } from '../components/dashboard/child-card.component';
import { NavigationDrawer } from '../components/dashboard/navigation.component';
import Typography from '@material-ui/core/Typography';

const DashboardPage: React.FC = () => {
    const logout = () => window.dispatchEvent(new Event('logout'));

    const user: User = { username: 'Joseph' };
    const children: Child[] = [
        {
            username: 'Tom',
        },
        {
            username: 'Sarah',
        },
    ];

    return (
        <div>
            <span>Dashboard</span>
            <button onClick={logout}>Logout</button>
            {/* <NavigationDrawer/> */}
            <ParentCard user={user} />
            <br />
            <Typography variant='h3' component='h1' gutterBottom>
                     Child Account
                </Typography>  
            <button>Add Child</button>  
            {children.map((child) => (
                <ChildCard child={child}></ChildCard>
            ))}
        </div>
    );
};

export { DashboardPage };
