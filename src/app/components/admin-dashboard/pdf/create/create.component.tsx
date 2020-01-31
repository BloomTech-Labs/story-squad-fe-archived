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

const PdfCreate: React.FC = () => {
    const classes = useStyles({});

    const history = useHistory();
    const { request, response } = useAPI('/canon', { method: 'POST' });
    const [state, setState] = React.useState({ week: '', base64: '', altbase64: '' });

    const { week } = state;

    const handleInputChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [key]: e.target.value });
    };

    const handleFileChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e) => {
                const base64 = e.target?.result?.toString().replace(/^.*base64,/, '');
                setState({ ...state, [key]: base64 });
            };
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        request({ ...state, week: Number(week) });
    };

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
                    onChange={handleFileChange('base64')}
                />

                <InputLabel htmlFor='pdfAlt'>Dyslexic PDF</InputLabel>
                <Input
                    id='pdfAlt'
                    type='file'
                    inputProps={{ accept: '.pdf' }}
                    disabled
                    onChange={handleFileChange('altbase64')}
                />

                <Button type='submit' variant='contained' color='primary'>
                    submit
                </Button>
            </form>
        </>
    );
};

export { PdfCreate };
