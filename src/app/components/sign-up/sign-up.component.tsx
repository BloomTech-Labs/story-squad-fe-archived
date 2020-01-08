import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core';

import { useAPI } from '../../hooks/api/api.hook';
import { useForm } from '../../hooks/form/form.hook';

interface SignUpProps {
    form: string;
    checkboxes: string;
}

interface SignUpState {
    email: string;
    password: string;
    comparePassword: string;
    termsOfService: boolean;
    privacyPolicy: boolean;
}

const SignUp: React.FC<SignUpProps> = ({ form, checkboxes }) => {
    // TODO: Setup Loading and Error States
    // eslint-disable-next-line
    const { response, loading, error, request } = useAPI('/auth/register', 'POST');
    const history = useHistory();
    const { state, handleStringChange, handleBoolChange, handleSubmitBuilder } = useForm<
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
            <Typography variant='h3' gutterBottom>
                Sign Up
            </Typography>
            <Typography variant='subtitle2'>Start your child reading stories today!</Typography>
            <form className={form} onSubmit={handleSubmit}>
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
                <TextField
                    fullWidth
                    type='password'
                    label='Confirm Password'
                    value={comparePassword}
                    onChange={handleStringChange('comparePassword')}
                />
                <div className={checkboxes}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value={termsOfService}
                                onChange={handleBoolChange('termsOfService')}
                            />
                        }
                        label='I accept the Terms of Service'
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                value={privacyPolicy}
                                onChange={handleBoolChange('privacyPolicy')}
                            />
                        }
                        label='I accept the Privacy Policy'
                    />
                </div>
                <Button type='submit' variant='contained' size='large'>
                    Sign Up
                </Button>
            </form>
        </>
    );
};

export { SignUp };
