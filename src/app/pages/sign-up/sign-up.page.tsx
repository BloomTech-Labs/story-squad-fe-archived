import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { Grid, Paper, Tab, Tabs, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { SignIn, SignUp } from '../../components';
import cityscape from './cityscape.png';
import 'typeface-nunito';

const useStyles = makeStyles((theme) => ({
    root: {
        background: `white`,
    },
    sidebar: {
        paddingTop: theme.spacing(6),
        flexGrow: 1,
        minHeight: '100vh',
        margin: 0,
        borderRadius: 0,
    },
    title: {
        'fontFamily': 'bangers',
        'fontSize': '72px',
        'color': '#ffffff',
        '-webkit-text-stroke-width': '3px',
        '-webkit-text-stroke-color': '#292929',
        'textAlign': 'center',
        'width': '100%',
        'height': '200px',
        'backgroundColor': '#6CEAE6',
        'backgroundImage': `url(${cityscape})`,
    },
    fontOverride: {
        fontFamily: 'nunito',
    },
    introText: {
        margin: '0 auto',
        width: '60%',
        color: '#292929',
        fontSize: '24px',
        fontFamily: 'nunito',
        fontWeight: 'lighter',
    },
    tabs: {
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4),

        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: theme.spacing(10),
            paddingRight: theme.spacing(10),
        },
        borderBottom: '1px solid gray',
    },
    onboarding: {
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4),

        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: theme.spacing(10),
            paddingRight: theme.spacing(10),
        },

        marginTop: theme.spacing(12),
    },
}));

const SignUpPage: React.FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const md = useMediaQuery(theme.breakpoints.up('md'));

    const handleChange = (_e, path: string) => {
        history.push(path);
    };

    return (
        <Grid
            className={classes.root}
            container
            direction='row'
            justify='flex-end'
            alignItems='stretch'>
            {md && (
                <>
                    <Grid className={classes.title} item>
                        Story Squad
                    </Grid>
                    <div className={classes.introText}>
                        <p>
                            Story Squad is a game where imagination comes to play. It’s where
                            generating ideas scores big.{' '}
                        </p>
                        <p>
                            Story Squad springs storytellers into action by partnering them up to
                            participate in interactive & immersive creative challenges.{' '}
                        </p>
                        <p>
                            Become a master of your craft by submitting original drawings &
                            handwritten stories, receiving and giving real feedback, sharing points
                            in a squad-vs-squad matchup, and finally see if you won.{' '}
                        </p>
                        <p>Ready?</p>
                    </div>
                </>
            )}

            <Grid item xs={md ? undefined : 12}>
                <Paper className={classes.sidebar} elevation={16}>
                    <Tabs
                        value={history.location.pathname}
                        onChange={handleChange}
                        className={classes.tabs}
                        indicatorColor='primary'
                        textColor='primary'
                        variant='fullWidth'>
                        <Tab value='/' className={classes.fontOverride} label='Sign In' />
                        <Tab value='/signup' className={classes.fontOverride} label='Sign Up' />
                    </Tabs>
                    <div className={classes.onboarding}>
                        <Switch>
                            <Route exact path='/' component={SignIn} />
                            <Route exact path='/signup' component={SignUp} />
                        </Switch>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
};

export { SignUpPage };
