import React from 'react';

import {
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Paper,
    Tab,
    Tabs,
    TextField,
    Typography,
    useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

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
            <Grid item xs={md ? 5 : 12}>
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
                    {value === 'sign-up' && (
                        <div className={classes.onboarding}>
                            <Typography variant='h3' gutterBottom>
                                Sign Up
                            </Typography>
                            <Typography variant='subtitle2'>
                                Start your child reading stories today!
                            </Typography>
                            <form className={classes.form}>
                                <TextField fullWidth label='Username' />
                                <TextField fullWidth label='Password' />
                                <TextField fullWidth label='Confirm Password' />
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label='I accept the Terms of Service'
                                    />
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label='I accept the Privacy Policy'
                                    />
                                </div>
                                <Button variant='contained' size='large'>
                                    Sign In
                                </Button>
                            </form>
                        </div>
                    )}
                    {value === 'sign-in' && (
                        <div className={classes.onboarding}>
                            <Typography variant='h4'>Sign In</Typography>
                            <form className={classes.form}>
                                <TextField fullWidth label='Username' />
                                <TextField fullWidth label='Password' />
                            </form>
                        </div>
                    )}
                </Paper>
            </Grid>
        </Grid>
    );
};

export { SignUpPage };
