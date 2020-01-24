import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
}));

const HelpPage: React.FC = () => {
    const classes = useStyles({});

    return (
        <div>
            <Typography variant='h4' gutterBottom>
                Help
            </Typography>

            <Typography>Select a Section Below to Get Help on the Topic!</Typography>

            <Link to='/admin/dashboard/help'>
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        window.alert('Not Yet Implemented');
                    }}>
                    Frequently asked Questions
                </Button>
            </Link>

            <Link to='/admin/dashboard/help'>
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        window.alert('Not Yet Implemented');
                    }}>
                    Cohorts and How they are Implemented
                </Button>
            </Link>

            <Link to='/admin/dashboard/help'>
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        window.alert('Not Yet Implemented');
                    }}>
                    How to Add a Story
                </Button>
            </Link>

            <Link to='/admin/dashboard/help'>
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        window.alert('Not Yet Implemented');
                    }}>
                    How to Add an Account
                </Button>
            </Link>
        </div>
    );
};

export { HelpPage };
