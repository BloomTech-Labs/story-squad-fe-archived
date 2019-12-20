import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core';

import { useAPI } from '../../hooks/api.hook';

interface SignUpProps {
    form: string;
    checkboxes: string;
}

interface SignUpState {
    username: string;
    password: string;
    comparePassword: string;
    termsOfService: boolean;
    privacyPolicy: boolean;
}

const SignUp: React.FC<SignUpProps> = ({ form, checkboxes }) => {
    const { response, loading, error, request } = useAPI('/auth/register', 'POST');
    const history = useHistory();
    const [state, setState] = React.useState<SignUpState>({
        username: '',
        password: '',
        comparePassword: '',
        termsOfService: false,
        privacyPolicy: false,
    });

    React.useEffect(() => {
        if (response?.token) {
            localStorage.setItem('jwt', response.token);
            history.push('/dashboard');
        }
    }, [history, response]);

    const handleStringChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
        setState({ ...state, [key]: e.target.value });

    const handleBoolChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
        setState({ ...state, [key]: e.target.checked });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { username, password, comparePassword } = state;
        if (password === comparePassword) request({ username, password });
    };

    const { username, password, comparePassword, termsOfService, privacyPolicy } = state;
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
                    label='Username'
                    value={username}
                    onChange={handleStringChange('username')}
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
