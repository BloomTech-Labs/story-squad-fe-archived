import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import { TableCell } from '@material-ui/core';

import { Button, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { AdminNavigationDrawer, PdfCreate } from '../../components';
import { AdminHomePage } from './home/home.page';

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

            <TableCell>Moderation Options</TableCell>

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
