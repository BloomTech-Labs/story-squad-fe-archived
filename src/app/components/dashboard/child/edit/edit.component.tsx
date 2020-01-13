import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { TextField, Button } from '@material-ui/core';

import { useAPI, useForm } from '../../../../hooks';
import { Child } from '../../../../models';

const ChildEdit: React.FC = () => {
    const history = useHistory();
    const { id } = useParams();

    const { request: fetch, response: fetchResponse } = useAPI<{ child: Child }>(`/children/${id}`);
    const { request: update, response: updateResponse } = useAPI(`/children/${id}`, 'PUT');

    const { state, setState, handleInputChange, handleSubmitBuilder } = useForm<Omit<Child, 'id'>>({
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

                <Button type='submit' variant='contained' color='primary'>
                    Edit Account
                </Button>
            </form>
        </>
    );
};

export { ChildEdit };
