import React, { useEffect } from 'react';
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
import { useStyles } from '../drawing-form/drawing-form-styles';

interface StoryFormProps {
    onUpdate?: () => void;
    week: number;
}

const StoryForm: React.FC<StoryFormProps> = ({ week, onUpdate }) => {
    const classes = useStyles({});
    const history = useHistory();
    const [submitted, setSubmitted] = React.useState(false);
    const [fetchedStory] = useAPI(`/storyRoutes/${week}`, 'GET', false);
    const [uploadedStory, loadingStory, submitStory] = useAPI(`/storyRoutes`, 'POST');
    const [removed, removing, remove] = useAPI(`/storyRoutes/${week}`, 'DELETE');
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
        submitStory(state);
    });

    const handleDelete = () => {
        remove();
    };

    useEffect(() => {
        //first render
        if (fetchedStory && (Object.keys(fetchedStory?.story).length || fetchedStory?.storyText)) {
            const { story } = fetchedStory;
            setState(story);
            setSubmitted(true);
        }
    }, [fetchedStory, setState]);

    useEffect(() => {
        if (
            uploadedStory &&
            uploadedStory?.stories &&
            (Object.keys(uploadedStory?.stories).length || uploadedStory?.storyText)
        ) {
            setSubmitted(true);
        }
    }, [uploadedStory, setState]);

    useEffect(() => {
        //checks if BE returned deleted as removed 4.1.20
        if (removed) {
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
    }, [removed, remove, setState, setSubmitted]);

    useEffect(() => {
        if (onUpdate) onUpdate();
        if (
            uploadedStory &&
            uploadedStory?.stories &&
            (Object.keys(uploadedStory?.stories).length || uploadedStory?.storyText)
        ) {
            history.push('/kids-dashboard');
        }
    }, [submitted, removed, history, onUpdate, uploadedStory]);

    useEffect(() => {
        // upon change of local state, update render
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
                <div className={classes.appBarStoryForm}>
                    <div className={classes.headerFont}>Pencils Ready?</div>
                </div>
                <CardContent className={classes.contentStoryForm}>
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
                {loadingStory && (
                    <>
                        <h2>Sending Progress...</h2>
                        <LinearProgress variant='query' color='secondary' />
                    </>
                )}
            </div>
            {loadingStory && <LinearProgress variant='query' color='secondary' />}
        </form>
    );
};

export { StoryForm };
