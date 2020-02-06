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

import { useAPI, useForm } from '../../../../hooks';

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
    const [currentSubmission] = useAPI(`/submissions/${week}`, 'GET', false);
    const [submission, submitting, submit] = useAPI('/submissions', 'POST');
    const [removed, removing, remove] = useAPI(`/submissions/${week}`, 'DELETE');
    const [newProgress, progressing, progress] = useAPI('/children/progress', 'POST');
    const { state, setState, handleInputChange, handleFileChange, handleSubmitBuilder } = useForm({
        storyText: '',
        illustration: '',
        story: {
            page1: '',
            page2: '',
            page3: '',
            page4: '',
            page5: '',
        },
    });

    const handleSubmit = handleSubmitBuilder(() => {
        if (state.story.page1) setState({ ...state, storyText: '' });
        submit(state);
    });

    const handleDelete = () => {
        remove();
    };

    React.useEffect(() => {
        if (removed && currentSubmission?.submission) {
            currentSubmission.submission = undefined;
            setState({
                storyText: '',
                illustration: '',
                story: {
                    page1: '',
                    page2: '',
                    page3: '',
                    page4: '',
                    page5: '',
                },
            });
        }
    }, [removed, currentSubmission, setState]);

    React.useEffect(() => {
        if (currentSubmission?.submission) {
            const { submission } = currentSubmission;
            setState(submission);
        }
    }, [currentSubmission, setState]);

    React.useEffect(() => {
        if (submission?.submission) {
            progress({ writing: true });
            submission.submission = undefined;
        }

        if (removed?.submission) {
            progress({ writing: false });
            removed.submission = undefined;
        }
    }, [submission, removed, progress]);

    React.useEffect(() => {
        if (newProgress && onUpdate) onUpdate();
        if (newProgress?.progress?.writing) history.push('/kids-dashboard');
    }, [history, onUpdate, newProgress]);

    React.useEffect(() => {
        const { page1, page2, page3, page4, page5 } = state.story;
        if (!page4 && page5) setState({ ...state, story: { ...state.story, page5: '' } });
        if (!page3 && page4) setState({ ...state, story: { ...state.story, page4: '' } });
        if (!page2 && page3) setState({ ...state, story: { ...state.story, page3: '' } });
        if (!page1 && page2) setState({ ...state, story: { ...state.story, page2: '' } });
    }, [setState, state]);

    const submitted = !!currentSubmission?.submission;
    const { storyText, illustration, story } = state;
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <Card>
                <CardHeader className={classes.header} title='Creative Content Submission' />
                <CardContent className={classes.content}>
                    <Typography variant='h6'>Story Submission</Typography>
                    {Object.keys(story).map((key, i, arr) => (
                        <React.Fragment key={i}>
                            {(i === 0 || story[arr[i - 1]]) && ( // if page1 or story[previous-page] is truthy, show file input
                                <TextField
                                    InputLabelProps={{ shrink: true }}
                                    label={`Story  ${key.replace(/page(\d)/, 'Page $1')}`} // transforms 'page1' to 'Page 1'
                                    type='file'
                                    inputProps={{ accept: 'image/*' }}
                                    onChange={handleFileChange('image', 'story', key)}
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
                        onChange={handleFileChange('image', 'illustration')}
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
                {submitting && <CircularProgress size={68} className={classes.buttonProgress} />}
            </div>
        </form>
    );
};

export { CCSForm };
