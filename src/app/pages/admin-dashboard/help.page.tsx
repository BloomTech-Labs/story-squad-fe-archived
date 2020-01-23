import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import { TableCell } from '@material-ui/core';
import { Button, AppBar, Toolbar, Typography } from '@material-ui/core';
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

            <TableCell>Select a Section Below to Get Help on the Topic!</TableCell>

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
                    Child Creation Help
                </Button>
            </Link>

            <Link to='/admin/dashboard/help'>
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        window.alert('Not Yet Implemented');
                    }}>
                    Parent Creation Help
                </Button>
            </Link>
        </div>
    );
};

export { HelpPage };