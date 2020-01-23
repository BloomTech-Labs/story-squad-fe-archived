import React from 'react';
import { useHistory } from 'react-router';

import { TextField, Button, Input, InputLabel, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAPI } from '../../../../hooks';

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

const CohortCreate: React.FC = () => {
    const classes = useStyles({});

    const history = useHistory();
    const { request, response } = useAPI('/cohort', 'POST');
    const [state, setState] = React.useState({ id: '', week: '', activity: '' });

    const { id } = state;

    const handleInputChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [key]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        request({ ...state, id: Number(id) });
    };

    React.useEffect(() => {
        if (response) history.push('/admin/dashboard/cohort-management');
    }, [history, response]);

    return (
        <>
            <Typography variant='h4'>Create a Cohort</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    type='number'
                    label='Week'
                    inputProps={{ min: '1' }}
                    required
                    value={id}
                    onChange={handleInputChange('id')}
                />

                <Button type='submit' variant='contained' color='primary'>
                    submit
                </Button>
            </form>
        </>
    );
};

export { CohortCreate };
