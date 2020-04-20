import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField, Typography } from '@material-ui/core';
import { useAPI } from '../../../hooks/api/api.hook';
import { useForm } from '../../../hooks/form/form.hook';
import { useStyles } from './sign-up-styles';

interface SignUpState {
    password: string;
}

const AdminSignUp: React.FC = () => {
    const classes = useStyles({});

    const token = new URLSearchParams(window.location.search).get('token');
    if (token) localStorage.setItem('jwt', token);

    const [response, loading, request] = useAPI('/admin/register', 'PUT');
    const history = useHistory();
    const { state, handleInputChange: handleStringChange, handleSubmitBuilder } = useForm<
        SignUpState
    >({
        password: '',
    });
    const [confirmPass, setConfirmPass] = useState('');

    const handleSubmit = handleSubmitBuilder(request);

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
