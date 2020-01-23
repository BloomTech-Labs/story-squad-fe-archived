import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

            <Typography>All Current Cohorts are Displayed Below</Typography>

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
