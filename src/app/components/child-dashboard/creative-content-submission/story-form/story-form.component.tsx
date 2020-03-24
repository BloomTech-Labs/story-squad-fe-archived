import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import {
    Card,
    CardContent,
    Fab,
    TextField,
    Typography,
    Button,
    LinearProgress,
} from '@material-ui/core';
import { useAPI, useForm } from '../../../../hooks';
import { useStyles } from './styles';

interface StoryFormProps {
    onUpdate?: () => void;
    week: number;
}

const StoryForm: React.FC<StoryFormProps> = ({ week, onUpdate }) => {
    const classes = useStyles({});
    const history = useHistory();
    const [submitted, setSubmitted] = React.useState(false);
    const [currentSubmission] = useAPI(`/storyRoutes/${week}`, 'GET', false);
    const [submission, submitting, submit] = useAPI('/storyRoutes', 'POST');
    const [removed, removing, remove] = useAPI(`/storyRoutes/${week}`, 'DELETE');
    const [newProgress, progressing, progress] = useAPI('/children/progress', 'POST');
    const { state, setState, handleInputChange, handleFileChange, handleSubmitBuilder } = useForm({
        storyText: '',
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
        if (removed && currentSubmission?.stories) {
            currentSubmission.stories = undefined;
            setState({
                storyText: '',
                story: {
                    page1: '',
                    page2: '',
                    page3: '',
                    page4: '',
                    page5: '',
                },
            });
            setSubmitted(false);
        }
    }, [removed, currentSubmission, setState, remove]);

    React.useEffect(() => {
        if (currentSubmission && Object.keys(currentSubmission?.story).length) {
            const { story } = currentSubmission;
            setState(story);
            setSubmitted(true);
        }
    }, [currentSubmission, setState]);

    React.useEffect(() => {
        if (submission && Object.keys(submission?.stories).length) {
            progress({ writing: true });
            setSubmitted(true);
        }

        if (removed && Object.keys(removed).length) {
            progress({ writing: false });
            setState({
                storyText: '',
                story: {
                    page1: '',
                    page2: '',
                    page3: '',
                    page4: '',
                    page5: '',
                },
            });
            setSubmitted(false);
        }
    }, [submission, removed, progress, setState]);

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

    const { storyText, story } = state;
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <Card className={classes.card}>
                <div className={classes.appBar}>
                    <div className={classes.headerFont}>Pencils Ready?</div>
                </div>
                <CardContent className={classes.content}>
                    <h2 className={classes.promptText}>
                        This will display the writing prompt for the week
                    </h2>
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
                </CardContent>
            </Card>

            <div className={classes.buttons}>
                <Link to={`/kids-dashboard`}>
                    <Button className={classes.orangeButton} style={{ alignContent: 'center' }}>
                        Back
                    </Button>
                </Link>
                <Fab
                    className={classes.orangeButton}
                    type={submitted ? undefined : 'submit'}
                    color='primary'
                    onClick={submitted ? () => handleDelete() : undefined}>
                    <Typography className={classes.buttonText}>
                        {submitted ? 'refresh' : 'Submit'}
                    </Typography>
                </Fab>
            </div>
            <div>
                {submitting && (
                    <>
                        <h2>Sending Progress...</h2>
                        <LinearProgress variant='query' color='secondary' />
                    </>
                )}
            </div>
        </form>
    );
};

export { StoryForm };
