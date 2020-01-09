import React from 'react';

import { CssBaseline, Button, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAPI } from '../../hooks';

import { NavigationDrawer, ParentCard, ChildList, NotificationsCard } from '../../components';
import { User } from '../../models';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - 240px)`,
        marginLeft: 240,
    },
    toolbar: { gridArea: 'toolbar' },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        display: 'grid',
        gridTemplate: `
            "toolbar toolbar" ${theme.mixins.toolbar.minHeight}px
            "header header" auto
            "children notifications" auto`,
        gridGap: theme.spacing(3),
    },
    header: {
        gridArea: 'header',
    },
    children: {
        gridArea: 'children',
    },
    notifications: {
        gridArea: 'notifications',
    },
    spacer: {
        flex: '1',
    },
}));

const DashboardPage: React.FC = () => {
    const classes = useStyles();
    const { request, response } = useAPI<{ me: User }>('/parents/me');
    const logout = () => window.dispatchEvent(new Event('logout'));

    React.useEffect(() => {
        request();
    }, [request]);

    if (!response?.me) return <div></div>;
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
                <ParentCard className={classes.header} user={response.me} />
                <ChildList className={classes.children} />
                <NotificationsCard className={classes.notifications} />
            </main>
        </div>
    );
};

export { DashboardPage };
