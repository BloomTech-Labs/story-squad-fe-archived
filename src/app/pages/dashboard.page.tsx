import React from 'react';

const DashboardPage: React.FC = () => {
    const logout = () => window.dispatchEvent(new Event('logout'));

    return (
        <div>
            <span>Dashboard</span> <button onClick={logout}>Logout</button>{' '}
        </div>
    );
};

export { DashboardPage };
