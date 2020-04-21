import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Checkbox, CircularProgress, TextField, Typography } from '@material-ui/core';
import { useAPI, useForm } from '../../../hooks';
import { useStyles } from './sign-up-styles';

interface SignUpState {
    email: string;
    password: string;
    comparePassword: string;
    termsOfService: boolean;
    privacyPolicy: boolean;
}

const SignUp: React.FC = () => {
    const classes = useStyles({});

    const [response, loading, request] = useAPI('/auth/register', 'POST');
    const history = useHistory();
    const { state, handleInputChange, handleBoolChange, handleSubmitBuilder } = useForm<
        SignUpState
    >({
        email: '',
        password: '',
        comparePassword: '',
        termsOfService: false,
        privacyPolicy: false,
    });

    const handleSubmit = handleSubmitBuilder(request);

    React.useEffect(() => {
        if (response?.token) {
            localStorage.setItem('jwt', response.token);
            history.push('/dashboard');
        }
    }, [history, response]);

    const { email, password, comparePassword, termsOfService, privacyPolicy } = state;
    return (
        <>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    type='email'
                    label='Email'
                    value={email}
                    onChange={handleInputChange('email')}
                />
                <TextField
                    fullWidth
                    type='password'
                    label='Password'
                    value={password}
                    onChange={handleInputChange('password')}
                />
                <TextField
                    fullWidth
                    type='password'
                    label='Confirm Password'
                    value={comparePassword}
                    onChange={handleInputChange('comparePassword')}
                />
                <div className={classes.checkboxes}>
                    <label className={classes.label}>
                        <Checkbox
                            value={termsOfService}
                            onChange={handleBoolChange('termsOfService')}
                        />
                        <Typography className={classes.multiline}>
                            I Accept the{' '}
                            <Link className={classes.link} to='/terms-of-service'>
                                Terms of Service
                            </Link>
                            <br />
                            and{' '}
                            <Link className={classes.link} to='/privacy-policy'>
                                Privacy Policy
                            </Link>
                        </Typography>
                    </label>
                </div>
                <div className={classes.wrapper}>
                    <Button
                        fullWidth
                        disabled={loading}
                        type='submit'
                        variant='contained'
                        size='large'
                        className={classes.signInBtn}>
                        Sign Up
                    </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
            </form>
        </>
    );
};

export { SignUp };
