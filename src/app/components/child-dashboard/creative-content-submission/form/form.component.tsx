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
    story: {
        page1: '',
        page2: '',
        page3: '',
        page4: '',
        page5: '',
    },
};

const CCSForm: React.FC<CCSFormProps> = ({ week, onUpdate }) => {
    const classes = useStyles({});
    const history = useHistory();
    const [state, setState] = React.useState(initState);
    const [getResponse, loadingSubmission, getSubmission] = useAPI(
        `/submissions/${week}`,
        'GET',
        false
    );
    const [postResponse, loadingSubmit, postSubmission] = useAPI('/submissions', 'POST');
    const [deleteResponse, loadingDelete, deleteSubmission] = useAPI(
        `/submissions/${week}`,
        'DELETE'
    );
    const [progressResponse, loadingProgress, postProgress] = useAPI('/children/progress', 'POST');

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

    const handleStoryChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e) => {
                const dataURL = e.target?.result?.toString();
                setState({ ...state, story: { ...state.story, [key]: dataURL } });
            };
        } else {
            setState({ ...state, story: { ...state.story, [key]: '' } });
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (state.story.page1) setState({ ...state, storyText: '' });
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
        const { page1, page2, page3, page4, page5 } = state.story;
        if (!page4 && page5) setState({ ...state, story: { ...state.story, page5: '' } });
        if (!page3 && page4) setState({ ...state, story: { ...state.story, page4: '' } });
        if (!page2 && page3) setState({ ...state, story: { ...state.story, page3: '' } });
        if (!page1 && page2) setState({ ...state, story: { ...state.story, page2: '' } });
    }, [state]);

    const submitted = !!getResponse?.submission;
    const { storyText, illustration, story } = state;
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <Card>
                <CardHeader className={classes.header} title='Creative Content Submission' />
                <CardContent className={classes.content}>
                    <Typography variant='h6'>Story Submission</Typography>
                    {Object.keys(story).map((key: string, i: number, arr: string[]) => (
                        <React.Fragment key={i}>
                            {(i === 0 || story[arr[i - 1]]) && ( // if page1 or story[previous-page] is truthy, show file input
                                <TextField
                                    InputLabelProps={{ shrink: true }}
                                    label={'Story' + key.replace(/page(\d)/, 'Page $1')} // transforms 'page1' to 'Page 1'
                                    type='file'
                                    inputProps={{ accept: 'image/*' }}
                                    onChange={handleStoryChange(key)}
                                    disabled={submitted}
                                />
                            )}
                            {story[key] && ( // if story[this-page] is truthy, show image
                                <img
                                    className={classes.preview}
                                    src={story[key]}
                                    alt={`your story${key} submission`}
                                />
                            )}
                        </React.Fragment>
                    ))}

                    <TextField
                        label='Typed Submission'
                        multiline
                        rows='8'
                        value={storyText}
                        onChange={handleInputChange('storyText')}
                        disabled={!!story.page1 || submitted}
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
                {loadingSubmit && <CircularProgress size={68} className={classes.buttonProgress} />}
            </div>
        </form>
    );
};

export { CCSForm };
