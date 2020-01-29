import React from 'react';
import { useHistory } from 'react-router';

import { TextField, Button, Input, InputLabel, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm, useAPI } from '../../../../hooks';

const useStyles = makeStyles(() => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '35vh',
        width: '100%',
        maxWidth: '80ch',
    },
}));

const AddAccount: React.FC = () => {
    const classes = useStyles({});

    const history = useHistory();
    const { request, response } = useAPI('/admin/register', 'POST');
    const { state, handleInputChange, handleSubmitBuilder } = useForm({ name: '', role: '' });
    const { name, role } = state;
    React.useEffect(() => {
        if (response) history.push('/admin/dashboard');
    }, [history, response]);

    return (
        <>
            <Typography variant='h4'>Add Account</Typography>
            <form className={classes.form} onSubmit={handleSubmitBuilder(request)}>
                <TextField
                    type='string'
                    label='username'
                    required
                    value={name}
                    onChange={handleInputChange('name')}
                />

                <TextField
                    type='string'
                    label='role'
                    required
                    value={role}
                    onChange={handleInputChange('role')}
                />

                <Button type='submit' variant='contained' color='primary'>
                    submit
                </Button>
            </form>
        </>
    );
};

export { AddAccount };
