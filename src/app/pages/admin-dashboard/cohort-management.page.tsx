import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import { Button, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TableCell } from '@material-ui/core';

import { AdminNavigationDrawer } from '../../components';
import { AdminHomePage } from './home/home.page';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '35vh',
        width: '100%',
        maxWidth: '80ch',
    },
}));

const CohortManagementPage: React.FC = () => {
    const classes = useStyles({});

    return (
        <div>
            <Typography variant='h4' gutterBottom>
                Cohort Management
            </Typography>

            <TableCell>All Current Cohorts are Displayed Below</TableCell>

            <Link to='/admin/dashboard/cohort-management'>
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        window.alert('Not Yet Implemented');
                    }}>
                    Cohort 1
                </Button>
            </Link>
            <Link to='/admin/dashboard/cohort-management'>
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        window.alert('Not Yet Implemented');
                    }}>
                    Cohort 2
                </Button>
            </Link>
            <Link to='/admin/dashboard/cohort-management'>
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        window.alert('Not Yet Implemented');
                    }}>
                    Cohort 3
                </Button>
            </Link>
            <Link to='/admin/dashboard/cohort-management'>
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        window.alert('Not Yet Implemented');
                    }}>
                    Cohort 4
                </Button>
            </Link>
        </div>
    );
};

export { CohortManagementPage };
