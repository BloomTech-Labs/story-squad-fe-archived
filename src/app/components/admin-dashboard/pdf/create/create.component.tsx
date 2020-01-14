import React from 'react';

import { useAPI } from '../../../../hooks';
import { TextField, Button, Input, InputLabel } from '@material-ui/core';
import { useHistory } from 'react-router';

const PdfCreate: React.FC = () => {
    const history = useHistory();
    const { request, response } = useAPI('/canon', 'POST');
    const [state, setState] = React.useState({ week: '', pdf: '', pdfAlt: '' });

    const { week, pdf, pdfAlt } = state;

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
        if (response) history.push('/admin');
    }, [history, response]);

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                type='number'
                label='Week'
                required
                value={week}
                onChange={handleInputChange('week')}
            />

            <InputLabel htmlFor='pdf'>Default PDF</InputLabel>
            <Input
                id='pdf'
                type='file'
                inputProps={{ accept: '.pdf' }}
                required
                onChange={handleFileChange('pdf')}
            />

            <InputLabel htmlFor='pdfAlt'>Dyslexic PDF</InputLabel>
            <Input
                id='pdfAlt'
                type='file'
                inputProps={{ accept: '.pdf' }}
                onChange={handleFileChange('pdfAlt')}
            />

            <Button type='submit' variant='contained' color='primary'>
                submit
            </Button>
        </form>
    );
};

export { PdfCreate };
