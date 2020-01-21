import React from 'react';

import { useAPI, useForm } from '../../../../hooks';
import { TextField, CircularProgress, Button } from '@material-ui/core';
import { useHistory } from 'react-router';

import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));

const ChildCreate: React.FC = () => {
    const classes = useStyles({});
    const history = useHistory();
    const { request, response, loading } = useAPI('/children', 'POST');
    const { state, handleInputChange, handleSubmitBuilder } = useForm({ username: '', grade: 3 });
    const handleChange = handleSubmitBuilder(request);

    React.useEffect(() => {
        if (response?.child) history.push(`/dashboard/subscribe/${response.child.id}`);
    }, [history, response]);

    const { username, grade } = state;
    return (
        <form onSubmit={handleChange}>
            <TextField
                type='text'
                label='Username'
                required
                value={username}
                onChange={handleInputChange('username')}
            />

            <TextField
                type='number'
                label='Grade'
                required
                value={grade}
                onChange={handleInputChange('grade')}
            />
            <div className={classes.wrapper}>
                <Button type='submit' variant='contained' color='primary'>
                    submit
                </Button>
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
            </div>
        </form>
    );
};

export { ChildCreate };
