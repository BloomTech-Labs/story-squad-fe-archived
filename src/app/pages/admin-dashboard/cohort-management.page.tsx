import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Button, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { AdminNavigationDrawer, PdfCreate } from '../../components';
import { AdminHomePage } from './home/home.page';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
}));

const CohortManagementPage: React.FC = () => {
    const classes = useStyles({});

    return <div className={classes.root}>Hello</div>;
};

export { CohortManagementPage };
