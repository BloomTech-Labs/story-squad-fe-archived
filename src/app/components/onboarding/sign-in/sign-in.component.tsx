import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Button, TextField, CircularProgress, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import { displayError } from '../../../state';
import { useAPI, useForm } from '../../../hooks';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        minHeight: 300,
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    multiline: {
        lineHeight: 1.3,
    },
    link: {
        color: 'black',
        textDecoration: 'underline',
        paddingTop: '8px',
    },
    label: {
        display: 'flex',
        alignItems: 'center',
    },
    checkboxes: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

interface SignInState {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const classes = useStyles({});

    // TODO: Setup Loading and Error States
    // eslint-disable-next-line
    const { response, request, loading, error } = useAPI('/auth/login', 'POST');
    const history = useHistory();
    const { state, handleInputChange: handleStringChange, handleSubmitBuilder } = useForm<
        SignInState
    >({
        email: '',
        password: '',
    });

    const handleSubmit = handleSubmitBuilder(request);

    React.useEffect(() => {
        if (response?.token) {
            localStorage.setItem('jwt', response.token);
            history.push('/dashboard');
        }
    }, [history, response]);

    React.useEffect(() => {
        if (typeof error?.message === 'string') displayError(error?.message);
    }, [error]);

    const { email, password } = state;
    return (
        <>
            <Typography variant='h3'>Welcome Back!</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    type='email'
                    label='Email'
                    value={email}
                    onChange={handleStringChange('email')}
                />
                <TextField
                    fullWidth
                    type='password'
                    label='Password'
                    value={password}
                    onChange={handleStringChange('password')}
                />
                <div className={classes.wrapper}>
                    <Button
                        fullWidth
                        disabled={loading}
                        type='submit'
                        variant='contained'
                        color='primary'
                        size='large'>
                        Sign In
                    </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
                <div className={classes.checkboxes}>
                    <label className={classes.label}>
                        <Typography className={classes.multiline}>
                            Dont have an account?{` `}
                            <Link className={classes.link} to='/signup'>
                                Sign up now!
                            </Link>
                        </Typography>
                    </label>
                </div>
            </form>
        </>
    );
};

export { SignIn };
