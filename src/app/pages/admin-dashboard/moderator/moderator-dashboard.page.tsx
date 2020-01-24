import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
}));

const ModeratorDashboardPage: React.FC = () => {
    const classes = useStyles({});

    return (
        <div>
            <Typography variant='h4' gutterBottom>
                Moderator Dashboard
            </Typography>

            <Typography>Moderation Options</Typography>

            <Link to='/admin/dashboard/moderator-dashboard'>
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        window.alert('Not Yet Implemented');
                    }}>
                    Parents
                </Button>
            </Link>
            <Link to='/admin/dashboard/moderator-dashboard'>
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        window.alert('Not Yet Implemented');
                    }}>
                    Children
                </Button>
            </Link>
        </div>
    );
};

export { ModeratorDashboardPage };
