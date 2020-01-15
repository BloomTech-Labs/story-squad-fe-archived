import React from 'react';

import {
    WelcomeCard,
    CurrentChapterLink,
    SimpleBottomNavigation,
    FanFictionUpload,
    KidProgressCard,
} from '../../components';
import { Button, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Child } from '../../models';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% )`,
    },
    spacer: {
        flex: '1',
    },
    main: {
        display: 'flex',
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
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
                <section className={classes.section}>
                    <div className={classes.toolbar} />
                    <WelcomeCard />
                    <br></br>
                    <CurrentChapterLink />
                    <br></br>
                    <FanFictionUpload />
                    <br></br>
                    <SimpleBottomNavigation />
                </section>
                <section className={classes.section}>
                    <KidProgressCard />
                </section>
            </main>
        </div>
    );
};

export { ChildDashboard };
