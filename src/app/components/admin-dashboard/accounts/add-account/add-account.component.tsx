import React from 'react';
import { useHistory } from 'react-router';

import {
    TextField,
    Button,
    Input,
    InputLabel,
    Typography,
    Select,
    MenuItem,
} from '@material-ui/core';
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
    inputContainer: {
        'width': '100%',
        '& > *': {
            width: '100%',
        },
    },
}));

const AddAccount: React.FC = () => {
    const classes = useStyles({});

    const history = useHistory();
    const { request, response } = useAPI('/admin/register', 'POST');
    const { state, handleInputChange, handleSubmitBuilder } = useForm({ email: '', role: '' });
    const { email, role } = state;
    React.useEffect(() => {
        console.log(response);
        if (response) history.push('/admin/dashboard');
    }, [history, response]);

    return (
        <>
            <Typography variant='h4'>Add Account</Typography>
            <form className={classes.form} onSubmit={handleSubmitBuilder(request)}>
                <TextField
                    type='string'
                    label='Email'
                    required
                    value={email}
                    onChange={handleInputChange('email')}
                />

                <div className={classes.inputContainer}>
                    <InputLabel id='role'>Role</InputLabel>
                    <Select
                        labelId='role'
                        value={role}
                        required
                        onChange={handleInputChange('role') as any}>
                        <MenuItem value='admin'>Admin</MenuItem>
                        <MenuItem value='moderator'>Moderator</MenuItem>
                    </Select>
                </div>

                <Button type='submit' variant='contained' color='primary'>
                    submit
                </Button>
            </form>
        </>
    );
};

export { AddAccount };
