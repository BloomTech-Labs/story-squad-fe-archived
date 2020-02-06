import React from 'react';

import { AppBar, Button, CircularProgress, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAPI } from '../../hooks';
import { WelcomeCard, KidProgressCard, CCSForm } from '../../components';
import { Switch, Route } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    appBar: {},
    spacer: {
        flexGrow: 1,
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: theme.spacing(3),
    },
    welcome: {
        marginBottom: theme.spacing(2),
    },
    toolbar: theme.mixins.toolbar,
}));

const ChildDashboard: React.FC = () => {
    const classes = useStyles();
    const logout = () => window.dispatchEvent(new Event('logout'));
    const [response, loading, request] = useAPI('/children/me');

    if (!response?.me)
        return (
            <section className={classes.loading}>
                <CircularProgress size={56} />
            </section>
        );

    return (
        <div className={classes.root}>
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                    <Typography variant='h6' noWrap>
                        Kid's Dashboard
                    </Typography>
                    <div className={classes.spacer} />
                    <Button onClick={logout} color='inherit'>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <main className={classes.main}>
                <div className={classes.toolbar} />

                <Switch>
                    <Route
                        path='/kids-dashboard/upload'
                        render={() => <CCSForm week={response.me.cohort.week} onUpdate={request} />}
                    />
                    <Route
                        path='/'
                        render={() => (
                            <div className={classes.content}>
                                <WelcomeCard className={classes.welcome} child={response.me} />
                                <KidProgressCard child={response.me} onUpdate={request} />
                            </div>
                        )}
                    />
                </Switch>
            </main>
        </div>
    );
};

export { ChildDashboard };
