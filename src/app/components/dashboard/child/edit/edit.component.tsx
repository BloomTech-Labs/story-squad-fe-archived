import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { TextField, CircularProgress, Button } from '@material-ui/core';

import { useAPI, useForm } from '../../../../hooks';
import { Child } from '../../../../models';

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

const ChildEdit: React.FC = () => {
    const classes = useStyles({});
    const history = useHistory();
    const { id } = useParams();

    const { request: fetch, response: fetchResponse, loading } = useAPI<{ child: Child }>(
        `/children/${id}`
    );
    const { request: update, response: updateResponse } = useAPI(`/children/${id}`, 'PUT');

    const { state, setState, handleInputChange, handleSubmitBuilder } = useForm<
        Omit<Child, 'id' | 'subscription'>
    >({
        username: '',
        grade: 3,
    });
    const handleSubmit = handleSubmitBuilder(update);

    React.useEffect(() => {
        fetch();
    }, [fetch]);

    React.useEffect(() => {
        if (!fetchResponse) return;
        const { id, ...child } = fetchResponse.child;
        setState({ ...child });
    }, [fetchResponse, setState]);

    React.useEffect(() => {
        if (updateResponse) history.push('/dashboard');
    }, [history, updateResponse]);

    if (!fetchResponse) return <div></div>;

    const { username, grade } = state;
    return (
        <>
            <form onSubmit={handleSubmit}>
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
                        Edit Account
                    </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
            </form>
        </>
    );
};

export { ChildEdit };
