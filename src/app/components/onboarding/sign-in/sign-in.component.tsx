import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, TextField, CircularProgress, Typography } from '@material-ui/core';
import { useAPI, useForm } from '../../../hooks';
import { useStyles } from './sign-in-styles';
interface SignInState {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const classes = useStyles({});
    const [response, loading, request] = useAPI('/auth/login', 'POST');
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
            <div className={classes.welcomeText}>
                Welcome! <br /> Sign in to continue
            </div>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    type='email'
                    label='Email'
                    value={email}
                    className={classes.fontOverride}
                    onChange={handleStringChange('email')}
                />
                <TextField
                    fullWidth
                    type='password'
                    label='Password'
                    value={password}
                    className={classes.fontOverride}
                    onChange={handleStringChange('password')}
                />
                <div className={classes.wrapper}>
                    <Button
                        fullWidth
                        disabled={loading}
                        type='submit'
                        variant='contained'
                        color='primary'
                        size='large'
                        className={classes.signInBtn}>
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
