import React from 'react';

import { Button, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {
    WelcomeCard,
    CurrentChapterLink,
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
                <div className={classes.sections}>
                    <section className={classes.section}>
                        <WelcomeCard />
                        <CurrentChapterLink />
                        <FanFictionUpload />
                    </section>
                    <section className={classes.section}>
                        <KidProgressCard />
                    </section>
                </div>
            </main>
            <SimpleBottomNavigation className={classes.bottomBar} />
        </div>
    );
};

export { ChildDashboard };
