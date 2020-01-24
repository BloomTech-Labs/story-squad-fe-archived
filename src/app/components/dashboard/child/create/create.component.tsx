import React from 'react';

import { Button, CircularProgress, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import { Child } from '../../../../models';
import { childListRefresh, displayError } from '../../../../state';
import { useAPI, useForm } from '../../../../hooks';

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

interface ChildCreateProps {
    onCreate: (child: Child) => void;
}

const ChildCreate: React.FC<ChildCreateProps> = ({ onCreate }) => {
    const classes = useStyles({});

    const { request, response, loading, error } = useAPI('/children/list', 'POST');
    const { state, handleInputChange, handleSubmitBuilder } = useForm({ username: '', grade: 3 });
    const handleChange = handleSubmitBuilder(request);

    React.useEffect(() => {
        if (response) childListRefresh();
        if (response && onCreate) onCreate(response.child);
    }, [response, onCreate]);

    React.useEffect(() => {
        if (typeof error?.message === 'string') displayError(error?.message);
    }, [error]);

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
