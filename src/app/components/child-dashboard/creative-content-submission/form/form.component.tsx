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
    Typography,
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

const initState = {
    storyText: '',
    illustration: '',
    page1: '',
    page2: '',
    page3: '',
    page4: '',
    page5: '',
};

const CCSForm: React.FC<CCSFormProps> = ({ week, onUpdate }) => {
    const classes = useStyles({});

    const history = useHistory();
    const { request: getSubmission, response: getResponse } = useAPI(`/submissions/${week}`);
    const { request: postSubmission, response: postResponse, loading } = useAPI(
        '/submissions',
        'POST'
    );
    const { request: deleteSubmission, response: deleteResponse } = useAPI(
        `/submissions/${week}`,
        'DELETE'
    );
    const { request: postProgress, response: progressResponse } = useAPI(
        '/children/progress',
        'POST'
    );
    const [state, setState] = React.useState(initState);

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
        if (state.page1) setState({ ...state, storyText: '' });
        postSubmission(state);
    };

    const handleDelete = () => {
        deleteSubmission();
    };

    React.useEffect(() => {
        if (week) getSubmission();
    }, [getSubmission, week]);

    React.useEffect(() => {
        if (deleteResponse && getResponse?.submission) {
            getResponse.submission = undefined;
            setState(initState);
        }
    }, [deleteResponse, getResponse]);

    React.useEffect(() => {
        if (getResponse?.submission) {
            const { submission } = getResponse;
            Object.assign(submission, submission.story);

            const newState = Object.fromEntries(
                Object.entries(initState).map(([key, value]) => [key, submission[key] || value])
            ) as any;

            setState(newState);
        }
    }, [getResponse]);

    React.useEffect(() => {
        if (postResponse?.submission) {
            postProgress({ writing: true });
            postResponse.submission = undefined;
        }

        if (deleteResponse?.submission) {
            postProgress({ writing: false });
            deleteResponse.submission = undefined;
        }
    }, [postResponse, deleteResponse, postProgress]);

    React.useEffect(() => {
        if (progressResponse && onUpdate) onUpdate();
        if (progressResponse?.progress?.writing) history.push('/kids-dashboard');
    }, [history, onUpdate, progressResponse]);

    React.useEffect(() => {
        const { page1, page2, page3, page4, page5 } = state;
        if (!page4 && page5) setState({ ...state, page5: '' });
        if (!page3 && page4) setState({ ...state, page4: '' });
        if (!page2 && page3) setState({ ...state, page3: '' });
        if (!page1 && page2) setState({ ...state, page2: '' });
    }, [state]);

    const submitted = !!getResponse?.submission;
    const { storyText, illustration, page1, page2, page3, page4, page5 } = state;
    return (
        <>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Card>
                    <CardHeader className={classes.header} title='Creative Content Submission' />
                    <CardContent className={classes.content}>
                        <Typography variant='h6'>Story Submission</Typography>
                        <TextField
                            InputLabelProps={{ shrink: true }}
                            label='Story Page 1'
                            type='file'
                            inputProps={{ accept: 'image/*' }}
                            onChange={handleFileChange('page1')}
                            disabled={submitted}
                        />

                        {page1 && (
                            <>
                                <img
                                    className={classes.preview}
                                    src={page1}
                                    alt='your story submission'
                                />
                                <TextField
                                    InputLabelProps={{ shrink: true }}
                                    label='Story Page 2'
                                    type='file'
                                    inputProps={{ accept: 'image/*' }}
                                    onChange={handleFileChange('page2')}
                                    disabled={submitted}
                                />
                            </>
                        )}

                        {page2 && (
                            <>
                                <img
                                    className={classes.preview}
                                    src={page2}
                                    alt='your story submission'
                                />
                                <TextField
                                    InputLabelProps={{ shrink: true }}
                                    label='Story Page 3'
                                    type='file'
                                    inputProps={{ accept: 'image/*' }}
                                    onChange={handleFileChange('page3')}
                                    disabled={submitted}
                                />
                            </>
                        )}

                        {page3 && (
                            <>
                                <img
                                    className={classes.preview}
                                    src={page3}
                                    alt='your story submission'
                                />
                                <TextField
                                    InputLabelProps={{ shrink: true }}
                                    label='Story Page 4'
                                    type='file'
                                    inputProps={{ accept: 'image/*' }}
                                    onChange={handleFileChange('page4')}
                                    disabled={submitted}
                                />
                            </>
                        )}

                        {page4 && (
                            <>
                                <img
                                    className={classes.preview}
                                    src={page4}
                                    alt='your story submission'
                                />
                                <TextField
                                    InputLabelProps={{ shrink: true }}
                                    label='Story Page 5'
                                    type='file'
                                    inputProps={{ accept: 'image/*' }}
                                    onChange={handleFileChange('page5')}
                                    disabled={submitted}
                                />
                            </>
                        )}

                        {page5 && (
                            <img
                                className={classes.preview}
                                src={page5}
                                alt='your story submission'
                            />
                        )}

                        <TextField
                            label='Typed Submission'
                            multiline
                            rows='8'
                            value={storyText}
                            onChange={handleInputChange('storyText')}
                            disabled={!!page1 || submitted}
                        />

                        <Typography variant='h6'>Illustration Submission</Typography>
                        <TextField
                            InputLabelProps={{ shrink: true }}
                            label='Artwork or Comic'
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
