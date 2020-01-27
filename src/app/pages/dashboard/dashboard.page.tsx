import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { DashboardProvider } from '../../state';
import { Heading, NavigationDrawer } from '../../components';

import { HomePage } from './home/home.page';
import { CardAddPage } from './payment/add/add.page';
import { CardListPage } from './payment/list/list.page';
import { SubscribePage } from './payment/subscribe/subscribe.page';
import { EditProfilePage } from './child/edit/edit.page';
import { CreateChildPage } from './child/create/child.page';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    toolbar: {
        [theme.breakpoints.down('sm')]: theme.mixins.toolbar,
    },
}));

const DashboardPage: React.FC = () => {
    const classes = useStyles();
    const [navOpen, setNavOpen] = React.useState(false);

    const openNav = () => setNavOpen(true);
    const closeNav = () => setNavOpen(false);

    return (
        <div className={classes.root}>
            <DashboardProvider>
                <Heading onMenuClick={openNav} />
                <NavigationDrawer open={navOpen} onClose={closeNav} />

                <main className={classes.main}>
                    <div className={classes.toolbar} />
                    <Switch>
                        <Route path='/dashboard/subscribe/:id' component={SubscribePage} />
                        <Route path='/dashboard/child/create' component={CreateChildPage} />
                        <Route path='/dashboard/child/edit/:id' component={EditProfilePage} />
                        <Route path='/dashboard/cards/add' component={CardAddPage} />
                        <Route path='/dashboard/cards' component={CardListPage} />
                        <Route path='/dashboard/home' component={HomePage} />
                        <Redirect to='/dashboard/home' />
                    </Switch>
                </main>
            </DashboardProvider>
        </div>
    );
};

export { DashboardPage };
