import React from 'react';

import { Grid, Paper, Tab, Tabs, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { SignIn, SignUp } from '../../components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    sidebar: {
        paddingTop: theme.spacing(6),
        flexGrow: 1,
        height: '100vh',
        margin: 0,
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
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '35vh',
    },
    checkboxes: {
        display: 'flex',
        flexDirection: 'column',
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
    const md = useMediaQuery(theme.breakpoints.up('md'));

    const [value, setValue] = React.useState('sign-up');

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Grid container direction='row' justify='flex-end' alignItems='stretch'>
            <Grid item xs={md ? 4 : 12}>
                <Paper className={classes.sidebar}>
                    <Tabs
                        className={classes.tabs}
                        value={value}
                        onChange={handleChange}
                        indicatorColor='primary'
                        textColor='primary'
                        variant='fullWidth'>
                        <Tab value='sign-up' label='Sign Up' />
                        <Tab value='sign-in' label='Sign In' />
                    </Tabs>
                    <div className={classes.onboarding}>
                        <Switch>
                            {value === 'sign-up' && <Route exact path='/' component={SignUp} />}
                            {value === 'sign-in' && <Route exact path='/' component={SignIn} />}
                        </Switch>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
};

export { SignUpPage };
