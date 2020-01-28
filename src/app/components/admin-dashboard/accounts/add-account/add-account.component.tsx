import React from 'react';
import { useHistory } from 'react-router';

import { TextField, Button, Input, InputLabel, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

    const handleInputChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [key]: e.target.value });
    };

    return (
        <>
            <Typography variant='h4'>Add Account</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    type='string'
                    label='username'
                    inputProps={{ name }}
                    required
                    value={name}
                    onChange={handleInputChange('name')}
                />

                <TextField
                    type='string'
                    label='role'
                    inputProps={{ role }}
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
