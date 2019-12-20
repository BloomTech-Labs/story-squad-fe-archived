import React from 'react';

import { Button, TextField, Typography } from '@material-ui/core';
import { useAPI } from '../../hooks/api.hook';

interface SignInProps {
    form: string;
}

interface SignInState {
    username: string;
    password: string;
}

const SignIn: React.FC<SignInProps> = ({ form }) => {
    const { response, loading, error, request } = useAPI('/auth/login', 'POST');
    const [state, setState] = React.useState<SignInState>({
        username: '',
        password: '',
    });

    const handleStringChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
        setState({ ...state, [key]: e.target.value });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { username, password } = state;
        request({ username, password });
    };

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
