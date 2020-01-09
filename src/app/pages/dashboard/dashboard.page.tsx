import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Button, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { NavigationDrawer } from '../../components';
import { HomePage } from './home/home.page';
import { AddCardPage } from './payment/add-card/add-card.page';
import { EditProfilePage } from './child/edit/edit.page';
import { CreateChildPage } from './child/create/child.page';

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

const DashboardPage: React.FC = () => {
    const classes = useStyles();
    const logout = () => window.dispatchEvent(new Event('logout'));

    return (
        <div className={classes.root}>
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                    <Typography variant='h6' noWrap>
                        Dashboard
                    </Typography>
                    <div className={classes.spacer} />
                    <Button onClick={logout} color='inherit'>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>

            <NavigationDrawer />

            <main className={classes.main}>
                <div className={classes.toolbar} />
                <Switch>
                    <Route path='/dashboard/child/create' component={CreateChildPage} />
                    <Route path='/dashboard/child/edit/:id' component={EditProfilePage} />
                    <Route path='/dashboard/cards/add' component={AddCardPage} />
                    <Route path='/dashboard' component={HomePage} />
                </Switch>
            </main>
        </div>
    );
};

export { DashboardPage };
