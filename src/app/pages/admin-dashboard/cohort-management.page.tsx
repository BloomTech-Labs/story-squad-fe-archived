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
    appBar: {
        width: `calc(100% - 240px)`,
        marginLeft: 240,
    },
    spacer: {
        flex: '1',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}));

const CohortManagementPage: React.FC = () => {
    const classes = useStyles({});
    const logout = () => window.dispatchEvent(new Event('logout'));

    return (
        <div className={classes.root}>
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                    <Typography id='cohort-management' variant='h6' noWrap>
                        Cohort Management
                    </Typography>
                    <div className={classes.spacer} />
                    <Button onClick={logout} color='inherit'>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>

            <AdminNavigationDrawer />

            <main className={classes.main}>
                <div className={classes.toolbar} />
                <Switch>
                    <Route path='/admin/dashboard/pdf/create' component={PdfCreate} />
                    <Route path='/admin/dashboard' component={AdminHomePage} />
                    <Route path='/dashboard/cohort-management' component={CohortManagementPage} />
                </Switch>
            </main>
        </div>
    );
};

export { CohortManagementPage };
