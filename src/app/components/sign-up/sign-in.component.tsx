import React from 'react';

import { Button, TextField, Typography } from '@material-ui/core';

interface SignInProps {
    form: string;
}

const SignIn: React.FC<SignInProps> = ({ form }) => {
    return (
        <>
            <Typography variant='h4'>Welcome Back!</Typography>
            <form className={form}>
                <TextField fullWidth label='Username' />
                <TextField fullWidth label='Password' />
                <Button variant='contained' size='large'>
                    Sign In
                </Button>
                <Typography variant='body1'>Don't have an account? Sign up</Typography>
            </form>
        </>
    );
};

export { SignIn };
