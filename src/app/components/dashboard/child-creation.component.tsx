import React from 'react';

import { useAPI, useForm } from '../../hooks';
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router';

const ChildCreation: React.FC = () => {
    const history = useHistory();
    const { request, response } = useAPI('/child', 'POST');
    const { state, handleInputChange, handleSubmitBuilder } = useForm({ username: '', grade: 3 });
    const handleChange = handleSubmitBuilder(request);

    React.useEffect(() => {
        if (response) history.push('/dashboard');
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

            <Button type='submit' variant='contained' color='primary'>
                submit
            </Button>
        </form>
    );
};

export { ChildCreation };
