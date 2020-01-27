import React from 'react';
import { useHistory } from 'react-router';

import { TextField, Button, Input, InputLabel, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAPI } from '../../../../hooks';
import { Child } from '../../../../models';

const useStyles = makeStyles(() => ({
    form: {
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'space-evenly',
        'width': '100%',
        'maxWidth': '80ch',
        '& > *': {
            margin: '0.5rem 0',
        },
    },
    preview: {
        height: '100%',
        width: '100%',
    },
}));

interface CCSFormProps {
    onUpdate?: () => void;
    child: Child;
}

const CCSForm: React.FC<CCSFormProps> = ({ child, onUpdate }) => {
    const classes = useStyles({});

    const history = useHistory();
    const { request: getSubmission, response: getResponse } = useAPI(
        `/submissions/${child.cohort.week}`
    );
    const { request: postSubmission, response: postResponse } = useAPI('/submissions', 'POST');
    const { request: deleteSubmission, response: deleteResponse } = useAPI(
        `/submissions/${child.cohort.week}`,
        'DELETE'
    );
    const { request: postProgress, response: progressResponse } = useAPI(
        '/children/progress',
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
        } else {
            setState({ ...state, [key]: '' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.story) setState({ ...state, storyText: '' });
        postSubmission(state);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        deleteSubmission();
    };

    React.useEffect(() => {
        getSubmission();
    }, [getSubmission]);

    React.useEffect(() => {
        if (getResponse && getResponse.submission) {
            const { story, storyText, illustration } = getResponse.submission;
            setState({ story, storyText, illustration });
        }
    }, [getResponse]);

    React.useEffect(() => {
        if (postResponse) postProgress({ writing: true });
        if (deleteResponse) postProgress({ writing: false });
    }, [postResponse, deleteResponse, postProgress]);

    React.useEffect(() => {
        if (progressResponse && onUpdate) {
            onUpdate();
            history.push('/kids-dashboard');
        }
    }, [history, onUpdate, progressResponse]);

    return (
        <>
            <Typography variant='h4'>Creative Content Submission</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Typography variant='h5'>Story Submission</Typography>

                <InputLabel htmlFor='story'>Image Submission</InputLabel>
                <Input
                    id='story'
                    type='file'
                    inputProps={{ accept: 'image/*' }}
                    onChange={handleFileChange('story')}
                    disabled={!!getResponse}
                />

                {state.story && (
                    <img
                        className={classes.preview}
                        src={state.story}
                        alt='your story submission'
                    />
                )}

                <TextField
                    label='Typed Submission'
                    multiline
                    rows='8'
                    value={state.storyText}
                    onChange={handleInputChange('storyText')}
                    disabled={!!state.story || !!getResponse}
                />

                <Typography variant='h5'>Illustration Submission</Typography>

                <InputLabel htmlFor='illustration'>Image Submission</InputLabel>
                <Input
                    id='illustration'
                    type='file'
                    inputProps={{ accept: 'image/*' }}
                    onChange={handleFileChange('illustration')}
                    disabled={!!getResponse}
                />

                {state.illustration && (
                    <img
                        className={classes.preview}
                        src={state.illustration}
                        alt='your illustration submission'
                    />
                )}

                <Button type='submit' variant='contained' color='primary' disabled={!!getResponse}>
                    Submit
                </Button>
                {getResponse && (
                    <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                        onClick={handleDelete}>
                        Delete
                    </Button>
                )}
            </form>
        </>
    );
};

export { CCSForm };
