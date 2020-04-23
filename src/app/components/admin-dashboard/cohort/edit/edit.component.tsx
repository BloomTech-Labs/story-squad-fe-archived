import React from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import { useAPI, useForm } from '../../../../hooks';
import { useStyles } from './edit.component.styles';

interface EditCohortProps {
    id?: string | number;
    onUpdate?: () => void;
}

const EditCohort: React.FC<EditCohortProps> = ({ id, onUpdate }) => {
    const classes = useStyles({});

    const [details] = useAPI(`/cohort/list/${id}`);
    const [updated, loading, update] = useAPI(
        `/cohort/list${id ? `/${id}` : ''}`,
        id ? 'PUT' : 'POST'
    );

    const { state, setState, handleInputChange, handleSubmitBuilder } = useForm({
        name: '',
    });

    const handleSubmit = handleSubmitBuilder(update);

    React.useEffect(() => {
        if (details?.cohort) setState({ name: details.cohort.name });
    }, [details, setState]);

    React.useEffect(() => {
        if (updated?.cohort && onUpdate) onUpdate();
        if (updated?.cohort) updated.cohort = undefined;
    }, [updated, onUpdate]);

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
