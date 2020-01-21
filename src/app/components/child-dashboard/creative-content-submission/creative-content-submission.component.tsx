import React from 'react';
import { useHistory } from 'react-router';

import { TextField, Button, Input, InputLabel, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAPI } from '../../../hooks';

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

const CreativeContentSubmission: any = ({ user }) => {
    const classes = useStyles({});

    const history = useHistory();
    const { request: getSubmission, response: getResponse } = useAPI(
        `/children/submissions/${user.week}`
    );
    const { request: postSubmission, response: postResponse } = useAPI(
        '/children/submissions',
        'POST'
    );
    const [state, setState] = React.useState({ story: '', storyText: '', illustration: '' });

    const handleInputChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [key]: e.target.value });
    };

    const handleFileChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e) => {
                const dataURL = e.target?.result?.toString();
                setState({ ...state, [key]: dataURL });
            };
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postSubmission(state);
    };

    React.useEffect(() => {
        if (postResponse) history.push('/kids-dashboard');
    }, [history, postResponse]);

    return (
        <>
            <Typography variant='h4'>Creative Content Submission</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Typography variant='h6'>Story Submission</Typography>

                <InputLabel htmlFor='story'>Image/Scan Submission</InputLabel>
                <Input
                    id='story'
                    type='file'
                    inputProps={{ accept: 'image/*' }}
                    onChange={handleFileChange('story')}
                />

                {/* To Do: text area */}

                <Typography variant='h6'>Illustration Submission</Typography>

                <InputLabel htmlFor='illustration'></InputLabel>
                <Input
                    id='illustration'
                    type='file'
                    inputProps={{ accept: 'image/*' }}
                    onChange={handleFileChange('illustration')}
                />

                <Button type='submit' variant='contained' color='primary'>
                    submit
                </Button>
            </form>
        </>
    );
};

export { CreativeContentSubmission };
