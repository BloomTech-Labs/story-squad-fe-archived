import React from 'react';
import { useHistory } from 'react-router';

import { TextField, Button } from '@material-ui/core';

import { childListRefresh } from '../../../../state';
import { useAPI, useForm } from '../../../../hooks';

interface ChildCreateProps {
    onCreate: () => void;
}

const ChildCreate: React.FC<ChildCreateProps> = ({ onCreate }) => {
    const { request, response } = useAPI('/children', 'POST');
    const { state, handleInputChange, handleSubmitBuilder } = useForm({ username: '', grade: 3 });
    const handleChange = handleSubmitBuilder(request);

    React.useEffect(() => {
        if (response && onCreate) onCreate();
    }, [response, onCreate]);

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

export { ChildCreate };
