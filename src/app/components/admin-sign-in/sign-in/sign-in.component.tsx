import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAPI } from '../../../hooks/api/api.hook';
import { useForm } from '../../../hooks/form/form.hook';

const useStyles = makeStyles(() => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '35vh',
    },
    container: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

interface SignInState {
    email: string;
    password: string;
}

const AdminSignIn: React.FC = () => {
    const classes = useStyles({});

    // TODO: Setup Loading and Error States
    // eslint-disable-next-line
    const { response, request, loading, error } = useAPI('/auth/login', { method: 'POST' });
    const history = useHistory();
    const { state, handleInputChange: handleStringChange, handleSubmitBuilder } = useForm<
        SignInState
    >({
        email: '',
        password: '',
    });

    const handleSubmit = handleSubmitBuilder(request);

    React.useEffect(() => {
        if (response) localStorage.setItem('jwt', response);
        if (response) history.push('/admin/dashboard');
    }, [history, response]);

    const { email, password } = state;
    return (
        <div className={classes.container}>
            <Typography variant='h4'>Admin/Moderator Sign-In</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    type='text'
                    label='Username/Email'
                    inputProps={{
                        pattern: 'admin|^.*@.*\\..*',
                        title: 'Must be admin or a valid email address',
                    }}
                    required
                    value={email}
                    onChange={handleStringChange('email')}
                />
                <TextField
                    fullWidth
                    type='password'
                    label='Password'
                    required
                    value={password}
                    onChange={handleStringChange('password')}
                />
                <Button type='submit' variant='contained' size='large'>
                    Sign In
                </Button>
            </form>
        </div>
    );
};

export { AdminSignIn };
