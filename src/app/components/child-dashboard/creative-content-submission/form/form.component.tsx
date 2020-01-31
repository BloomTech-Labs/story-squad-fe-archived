import React from 'react';
import { useHistory } from 'react-router';

import {
    Card,
    CardContent,
    CardHeader,
    CircularProgress,
    Fab,
    Icon,
    TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import { useAPI } from '../../../../hooks';

const useStyles = makeStyles((theme) => ({
    header: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
    },
    content: {
        display: 'grid',
        gridGap: theme.spacing(3),
    },
    form: {
        margin: theme.spacing(2),
    },
    preview: {
        height: 400,
        width: 400,
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
}));

interface CCSFormProps {
    onUpdate?: () => void;
    week: number;
}

const CCSForm: React.FC<CCSFormProps> = ({ week, onUpdate }) => {
    const classes = useStyles({});

    const history = useHistory();
    const { request: getSubmission, response: getResponse, reset } = useAPI(
        `/submissions/${week}`,
        { errors: false }
    );
    const { request: postSubmission, response: postResponse, loading } = useAPI('/submissions', {
        method: 'POST',
    });
    const { request: deleteSubmission, response: deleteResponse, reset: resetDelete } = useAPI(
        `/submissions/${week}`,
        {
            method: 'DELETE',
        }
    );
    const { request: postProgress, response: progressResponse } = useAPI('/children/progress', {
        method: 'POST',
    });
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (state.story) setState({ ...state, storyText: '' });
        postSubmission(state);
    };

    const handleDelete = () => {
        deleteSubmission();
    };

    React.useEffect(() => {
        if (week) getSubmission();
    }, [getSubmission, week]);

    React.useEffect(() => {
        if (deleteResponse && getResponse) {
            reset();
            setState({ story: '', storyText: '', illustration: '' });
        }
    }, [deleteResponse, getResponse, reset]);

    React.useEffect(() => {
        if (getResponse) {
            const { story, storyText, illustration } = getResponse;
            setState({ story, storyText, illustration });
        }
    }, [getResponse]);

    React.useEffect(() => {
        if (postResponse) {
            postProgress({ submission: true });
            reset();
        }

        if (deleteResponse) {
            postProgress({ submission: false });
            resetDelete();
        }
    }, [postResponse, deleteResponse, postProgress, reset, resetDelete]);

    React.useEffect(() => {
        if (progressResponse && onUpdate) onUpdate();
        if (progressResponse?.submission) history.push('/kids-dashboard');
    }, [history, onUpdate, progressResponse]);

    const submitted = !!getResponse;
    const { story, storyText, illustration } = state;
    return (
        <>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Card>
                    <CardHeader className={classes.header} title='Creative Content Submission' />
                    <CardContent className={classes.content}>
                        <TextField
                            InputLabelProps={{ shrink: true }}
                            label='Story Submission'
                            id='story'
                            type='file'
                            inputProps={{ accept: 'image/*' }}
                            onChange={handleFileChange('story')}
                            disabled={submitted}
                        />

                        {story && (
                            <img
                                className={classes.preview}
                                src={story}
                                alt='your story submission'
                            />
                        )}

                        <TextField
                            label='Typed Submission'
                            multiline
                            rows='8'
                            value={storyText}
                            onChange={handleInputChange('storyText')}
                            disabled={!!story || submitted}
                        />

                        <TextField
                            InputLabelProps={{ shrink: true }}
                            label='Image Submission'
                            type='file'
                            inputProps={{ accept: 'image/*' }}
                            onChange={handleFileChange('illustration')}
                            disabled={submitted}
                        />

                        {illustration && (
                            <img
                                className={classes.preview}
                                src={illustration}
                                alt='Your illustration submission'
                            />
                        )}
                    </CardContent>
                </Card>

                <div className={classes.wrapper}>
                    <Fab
                        type={submitted ? undefined : 'submit'}
                        color='primary'
                        onClick={submitted ? () => handleDelete() : undefined}>
                        <Icon>{submitted ? 'refresh' : 'save'}</Icon>
                    </Fab>
                    {loading && <CircularProgress size={68} className={classes.buttonProgress} />}
                </div>
            </form>
        </>
    );
};

export { CCSForm };
