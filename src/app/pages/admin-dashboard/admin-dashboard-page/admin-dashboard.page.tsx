import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Button, AppBar, Toolbar, Typography } from '@material-ui/core';
import { AdminNavigationDrawer, PdfCreate, AddAccount } from '../../../components';
import { AdminHomePage } from '../home/home.page';
import { HelpPage } from '../help/help.page';
import { ModeratorDashboardPage } from '../moderator/moderator-dashboard.page';
import { ManageCohortPage } from '../cohort/manage/manage.page';
import { EditCohortPage } from '../cohort/edit/edit.page';
import { CohortDetailsPage } from '../cohort/details/details.page';
import { SubmissionsPage } from '../cohort/submissions/submissions.page';
import { useStyles } from './admin-dashboard-page-styles';
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
                    <Route path='/admin/dashboard/moderator' component={ModeratorDashboardPage} />
                    <Route path='/admin/dashboard/help' component={HelpPage} />
                    <Route
                        path='/admin/dashboard/cohort/:id/details/story'
                        component={SubmissionsPage}
                    />
                    <Route
                        path='/admin/dashboard/cohort/:id/details/drawing'
                        component={SubmissionsPage}
                    />
                    <Route
                        path='/admin/dashboard/cohort/:id/details'
                        component={CohortDetailsPage}
                    />
                    <Route path='/admin/dashboard/cohort/:id/edit' component={EditCohortPage} />
                    <Route path='/admin/dashboard/cohort/create' component={EditCohortPage} />
                    <Route path='/admin/dashboard/cohort' component={ManageCohortPage} />
                    <Route path='/admin/dashboard/add' component={AddAccount} />
                    <Route path='/admin/dashboard' component={AdminHomePage} />
                </Switch>
            </main>
        </div>
    );
};

export { AdminDashboardPage };
