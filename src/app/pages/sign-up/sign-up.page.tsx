import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { Grid, Paper, Tab, Tabs, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { SignIn, SignUp } from '../../components';

const useStyles = makeStyles((theme) => ({
    root: {
        background: `linear-gradient(-30deg, #64b5f6, #512da8)`,
    },
    sidebar: {
        paddingTop: theme.spacing(6),
        flexGrow: 1,
        minHeight: '100vh',
        margin: 0,
        borderRadius: 0,
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
            <Grid item xs={md ? 4 : 12}>
                <Paper className={classes.sidebar} elevation={16}>
                    <Tabs
                        value={history.location.pathname}
                        onChange={handleChange}
                        className={classes.tabs}
                        indicatorColor='primary'
                        textColor='primary'
                        variant='fullWidth'>
                        <Tab value='/' label='Sign In' />
                        <Tab value='/signup' label='Sign Up' />
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
