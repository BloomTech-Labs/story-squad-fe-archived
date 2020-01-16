import React from 'react';

import { Button, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAPI } from '../../hooks';
import {
    WelcomeCard,
    SimpleBottomNavigation,
    FanFictionUpload,
    KidProgressCard,
} from '../../components';

const useStyles = makeStyles((theme) => ({
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
    sections: {
        display: 'flex',
        justifyContent: 'center',
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.default,
        margin: theme.spacing(3),
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        width: '100vw',
    },
    toolbar: theme.mixins.toolbar,
}));

const ChildDashboard: React.FC = () => {
    const classes = useStyles();
    const logout = () => window.dispatchEvent(new Event('logout'));
    const { request, response } = useAPI('/children/me');

    React.useEffect(() => {
        request();
    }, [request]);

    if (!response?.me) return <div></div>;
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
                <WelcomeCard />
                <div className={classes.sections}>
                    <section className={classes.section}>
                        <KidProgressCard child={response.me} />
                    </section>
                    <section className={classes.section}>
                        <FanFictionUpload />
                    </section>
                </div>
            </main>
            <SimpleBottomNavigation className={classes.bottomBar} />
        </div>
    );
};

export { ChildDashboard };
