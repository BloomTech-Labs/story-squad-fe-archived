import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Button, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { AdminNavigationDrawer, PdfCreate } from '../../components';

import { AdminHomePage } from './home/home.page';
import { CohortManagementPage } from './cohort-management.page';
import { ModeratorDashboardPage } from './moderator-dashboard.page';
import { HelpPage } from './help.page';
import { CohortCreate } from '../../components/admin-dashboard/cohort/create-cohort.component';

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

const AdminDashboardPage: React.FC = () => {
    const classes = useStyles();
    const logout = () => window.dispatchEvent(new Event('logout'));

    return (
        <div className={classes.root}>
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                    <Typography variant='h6' noWrap>
                        Admin Dashboard
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
                    <Route
                        path='/admin/dashboard/moderator-dashboard'
                        component={ModeratorDashboardPage}
                    />
                    <Route path='/admin/dashboard/help' component={HelpPage} />
                    <Route
                        path='/admin/dashboard/cohort-management'
                        component={CohortManagementPage}
                    />
                    <Route path='/admin/dashboard/create-cohort' component={CohortCreate} />

                    <Route path='/admin/dashboard' component={AdminHomePage} />
                </Switch>
            </main>
        </div>
    );
};

export { AdminDashboardPage };
