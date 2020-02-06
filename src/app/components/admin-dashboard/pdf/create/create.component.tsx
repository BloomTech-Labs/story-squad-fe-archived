import React from 'react';
import { useHistory } from 'react-router';

import { TextField, Button, Input, InputLabel, Typography } from '@material-ui/core';
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

const PdfCreate: React.FC = () => {
    const classes = useStyles({});

    const history = useHistory();
    const [response, loading, request] = useAPI('/canon', 'POST');
    const { state, setState, handleInputChange, handleFileChange, handleSubmitBuilder } = useForm({
        week: '',
        base64: '',
        altbase64: '',
    });

    const { week } = state;

    const handleSubmit = handleSubmitBuilder(() => {
        request({ ...state, week: Number(week) });
    });

    React.useEffect(() => {
        if (response) history.push('/admin/dashboard');
    }, [history, response]);

    return (
        <>
            <Typography variant='h4'>Add/Overwrite Story</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    type='number'
                    label='Week'
                    inputProps={{ min: '1' }}
                    required
                    value={week}
                    onChange={handleInputChange('week')}
                />

                <InputLabel htmlFor='pdf'>Default PDF *</InputLabel>
                <Input
                    id='pdf'
                    type='file'
                    inputProps={{ accept: '.pdf' }}
                    required
                    onChange={handleFileChange('pdf', 'base64')}
                />

                <InputLabel htmlFor='pdfAlt'>Dyslexic PDF</InputLabel>
                <Input
                    id='pdfAlt'
                    type='file'
                    inputProps={{ accept: '.pdf' }}
                    disabled
                    onChange={handleFileChange('pdf', 'altbase64')}
                />

                <Button type='submit' variant='contained' color='primary'>
                    submit
                </Button>
            </form>
        </>
    );
};

export { PdfCreate };
