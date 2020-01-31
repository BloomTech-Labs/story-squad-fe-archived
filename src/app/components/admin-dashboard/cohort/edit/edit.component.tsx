import React from 'react';
import { useHistory } from 'react-router';

import { TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAPI, useForm } from '../../../../hooks';

const useStyles = makeStyles(() => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '35vh',
        width: '100%',
    },
}));

interface EditCohortProps {
    id?: string | number;
    onUpdate?: () => void;
}

const EditCohort: React.FC<EditCohortProps> = ({ id, onUpdate }) => {
    const classes = useStyles({});

    const { request: fetch, response: details } = useAPI(`/cohorts/${id}`, { errors: false });
    const { request: update, response: updated, reset } = useAPI(`/cohorts${id ? `/${id}` : ''}`, {
        method: id ? 'PUT' : 'POST',
    });

    const { state, setState, handleInputChange, handleSubmitBuilder } = useForm({
        name: '',
    });

    const handleSubmit = handleSubmitBuilder(update);

    React.useEffect(() => {
        if (id) fetch();
    }, [id, fetch]);

    React.useEffect(() => {
        if (details) setState({ name: details.name });
    }, [details, setState]);

    React.useEffect(() => {
        if (updated && onUpdate) onUpdate();
        if (updated) reset();
    }, [updated, onUpdate, reset]);

    const { name } = state;
    return (
        <>
            <Typography variant='h4'>Create a Cohort</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    label='Cohort Name'
                    required
                    value={name}
                    onChange={handleInputChange('name')}
                />

                <Button type='submit' variant='contained' color='primary'>
                    SUBMIT
                </Button>
            </form>
        </>
    );
};

export { EditCohort };
