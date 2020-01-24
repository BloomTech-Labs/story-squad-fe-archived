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
        maxWidth: '80ch',
    },
}));

const EditCohort: React.FC = () => {
    const classes = useStyles({});

    const history = useHistory();
    const { request, response } = useAPI('/cohort/list', 'POST');
    const { state, handleInputChange, handleSubmitBuilder } = useForm({
        name: '',
    });

    const handleSubmit = handleSubmitBuilder(request);

    React.useEffect(() => {
        if (response?.cohort) history.push('/admin/dashboard/cohort-management');
    }, [history, response]);

    const { name } = state;
    return (
        <>
            <Typography variant='h4'>Create a Cohort</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    type='string'
                    label='Cohort Name'
                    inputProps={{ min: '1' }}
                    required
                    value={name}
                    onChange={handleInputChange('name')}
                />

                <Button type='submit' variant='contained' color='primary'>
                    submit
                </Button>
            </form>
        </>
    );
};

export { EditCohort };
