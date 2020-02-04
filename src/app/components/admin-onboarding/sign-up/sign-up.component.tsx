import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAPI } from '../../../hooks/api/api.hook';
import { useForm } from '../../../hooks/form/form.hook';
import { displayError } from '../../../state';

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

interface SignUpState {
    password: string;
}

const AdminSignUp: React.FC = () => {
    const classes = useStyles({});

    const token = new URLSearchParams(window.location.search).get('token');
    if (token) localStorage.setItem('jwt', token);

    // TODO: Setup Loading and Error States
    // eslint-disable-next-line
    const { response, loading, error, request } = useAPI('/admin/register', 'PUT');
    const history = useHistory();
    const { state, handleInputChange: handleStringChange, handleSubmitBuilder } = useForm<
        SignUpState
    >({
        password: '',
    });
    const [confirmPass, setConfirmPass] = useState('');

    const handleSubmit = handleSubmitBuilder(request);

    React.useEffect(() => {
        if (typeof error?.message === 'string') displayError(error?.message);
    }, [error]);

    React.useEffect(() => {
        if (response?.token) {
            localStorage.setItem('jwt', response.token);
            history.push('/admin/dashboard');
        }
    }, [history, response]);

    const { password } = state;
    return (
        <div className={classes.container}>
            <Typography variant='h4'>Admin/Moderator Sign-Up</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    type='password'
                    label='Password'
                    required
                    value={password}
                    onChange={handleStringChange('password')}
                />
                <TextField
                    fullWidth
                    type='password'
                    label='Confirm Password'
                    required
                    value={confirmPass}
                    onChange={(e) => {
                        setConfirmPass(e.target.value);
                    }}
                    error={confirmPass !== password}
                />
                <Button
                    type='submit'
                    variant='contained'
                    size='large'
                    disabled={confirmPass !== password}>
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

export { AdminSignUp };
