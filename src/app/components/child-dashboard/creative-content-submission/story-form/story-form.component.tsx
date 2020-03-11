import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardHeader,
    CircularProgress,
    Fab,
    Icon,
    TextField,
    Typography,
    Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import cityscape from '../../../../pages/child-dashboard/icons/cityscape.png';
import { useAPI, useForm } from '../../../../hooks';

const useStyles = makeStyles((theme) => ({
    header: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        borderBottom: '7px solid #000000',
    },
    card: {
        borderLeft: '7px solid #000000',
        borderBottom: '7px solid #000000',
        borderRight: '7px solid #000000',
    },
    content: {
        display: 'grid',
        gridGap: theme.spacing(3),
    },
    form: {
        margin: '0 auto',
        width: '50%',
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
    orangeButton: {
        'marginTop': '20px',
        'backgroundColor': '#FF6B35',
        'fontSize': '24px',
        'fontWeight': 'bold',
        'borderRadius': '50px',
        'color': 'white',
        'width': '200px',
        'height': '50px',
        'boxShadow': '0px 8px 0px #97300A',
        'textTransform': 'capitalize',
        'fontFamily': 'nunito',
        '&:hover': {
            backgroundColor: '#FF6B35',
        },
    },
    buttonText: {
        fontSize: '24px',
        fontWeight: 'bold',
        fontFamily: 'nunito',
    },
    appBar: {
        height: '229px',
        backgroundColor: '#6CEAE6',
        backgroundImage: `url(${cityscape})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '101% 103%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '7px solid #000000',
        borderTop: '7px solid #000000',
    },
    headerFont: {
        'fontFamily': 'Bangers',
        'color': '#FFFFFF',
        'fontSize': '86px',
        'fontWeight': 'bold',
        '-webkit-text-stroke-width': '1px',
        '-webkit-text-stroke-color': '#000000',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));

interface StoryFormProps {
    onUpdate?: () => void;
    week: number;
}

const StoryForm: React.FC<StoryFormProps> = ({ week, onUpdate }) => {
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
            <Card className={classes.card}>
                <div className={classes.appBar}>
                    <div className={classes.headerFont}>Pencils Ready?</div>
                </div>
                <CardHeader
                    className={classes.header}
                    title='This will display the writing prompt for the week'
                />
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
                {/* {submitting && <CircularProgress size={68} className={classes.buttonProgress} />} */}
            </div>
        </form>
    );
};

export { StoryForm };
