import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, TextField, Typography } from '@material-ui/core';

import { useAPI } from '../../hooks/api/api.hook';
import { useForm } from '../../hooks/form/form.hook';

interface SignInProps {
    form: string;
}

interface SignInState {
    username: string;
    password: string;
}

const SignIn: React.FC<SignInProps> = ({ form }) => {
    // TODO: Setup Loading and Error States
    // eslint-disable-next-line
    const { response, loading, error, request } = useAPI('/auth/login', 'POST');
    const history = useHistory();
    const { state, handleStringChange, handleSubmitBuilder } = useForm<SignInState>({
        username: '',
        password: '',
    });

    const handleSubmit = handleSubmitBuilder(request);

    React.useEffect(() => {
        if (response?.token) {
            localStorage.setItem('jwt', response.token);
            history.push('/dashboard');
        }
    }, [history, response]);

    const { username, password } = state;
    return (
        <>
            <Typography variant='h4'>Welcome Back!</Typography>
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
                <Button type='submit' variant='contained' size='large'>
                    Sign In
                </Button>
                <Typography variant='body1'>Don't have an account? Sign up</Typography>
            </form>
        </>
    );
};

export { SignIn };
