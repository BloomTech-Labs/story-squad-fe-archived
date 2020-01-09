import React from 'react';

import { CssBaseline, Button, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAPI } from '../hooks';

import { NavigationDrawer, ParentCard, ChildList } from '../components';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - 240px)`,
        marginLeft: 240,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    spacer: {
        flex: '1',
    },
}));

const DashboardPage: React.FC = () => {
    const classes = useStyles();
    const { request, response: user } = useAPI('/parent/me');
    const logout = () => window.dispatchEvent(new Event('logout'));

    React.useEffect(() => {
        request();
    }, [request]);

    if (!user) return <div></div>;
    return (
        <div className={classes.root}>
            <CssBaseline />

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

            <main className={classes.content}>
                <div className={classes.toolbar} />
                <ParentCard user={user} />
                <ChildList />
            </main>
        </div>
    );
};

export { DashboardPage };
