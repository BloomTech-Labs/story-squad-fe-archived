import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, TextField, CircularProgress, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import { useAPI } from '../../../hooks/api/api.hook';
import { useForm } from '../../../hooks/form/form.hook';
import { CustomizedSnackbars } from '../../../pages/snackbar/sign-in-snackbar';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '35vh',
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
        marginTop: -24,
        marginLeft: -12,
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
    const { response, loading, error, request } = useAPI('/auth/login', 'POST');
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

    const { email, password } = state;

    return (
        <>
            <Typography variant='h4'>Welcome Back!</Typography>
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
                    <CustomizedSnackbars />

                    <Button
                        fullWidth
                        disabled={loading}
                        type='submit'
                        variant='contained'
                        size='large'>
                        Sign In
                    </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                    <Typography variant='body1'>Don't have an account? Sign up</Typography>
                </div>
            </form>
        </>
    );
};

export { SignIn };
