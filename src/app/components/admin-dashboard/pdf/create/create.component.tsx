import React from 'react';

import { useAPI } from '../../../../hooks';
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router';

const PdfCreate: React.FC = () => {
    const history = useHistory();
    const { request, response } = useAPI('/canon', 'POST');

    const [state, setState] = React.useState({ week: '', pdf: '', pdfAlt: '' });

    const handleInputChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [key]: e.target.value });
    };

    const handleFileChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e) => {
                // console.log(`hello ${e.target?.result?.toString()}`);
            };
        }
        // setState({ ...state, [key]:  });
    };

    const handleChange = (e) => {
        e.preventDefault();
        // TODO edit data shape/type
        // TODO send data
        // request()
    };

    React.useEffect(() => {
        if (response) history.push('/admin');
    }, [history, response]);

    const { week, pdf, pdfAlt } = state;
    return (
        <form onSubmit={handleChange}>
            <TextField
                type='number'
                label='Week'
                required
                value={week}
                onChange={handleInputChange('week')}
            />

            <TextField
                type='file'
                label='PDF'
                inputProps={{ accept: '.pdf' }}
                required
                // value={pdf}
                // onChange={handleInputChange('pdf')}
                onChange={handleFileChange('pdf')}
            />

            <Button type='submit' variant='contained' color='primary'>
                submit
            </Button>
        </form>
    );
};

export { PdfCreate };
