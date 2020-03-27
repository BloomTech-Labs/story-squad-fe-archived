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
import { makeStyles } from '@material-ui/core/styles';
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
        display: 'flex',
        flexDirection: 'column',
    },
    form: {
        margin: '0 auto',
        width: '50%',
    },
    preview: {
        height: 200,
        width: 200,
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    orangeButton: {
        'backgroundColor': '#FF6B35',
        'fontSize': '24px',
        'fontWeight': 'bold',
        'borderRadius': '10px',
        'color': 'white',
        'width': '200px',
        'border': '3px solid #292929',
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
    promptText: {
        fontFamily: 'nunito',
        fontSize: '36px',
        fontWeight: 'normal',
        color: '#292929',
    },
}));

interface DrawingFormProps {
    onUpdate?: () => void;
    week: number;
}

const DrawingForm: React.FC<DrawingFormProps> = ({ week, onUpdate }) => {
    const classes = useStyles({});
    const history = useHistory();
    const [submitted, setSubmitted] = React.useState(false);
    const [currentSubmission] = useAPI(`/illustrationRoutes/${week}`, 'GET', false);
    const [submission, submitting, submit] = useAPI('/illustrationRoutes', 'POST');
    const [removed, removing, remove] = useAPI(`/illustrationRoutes/${week}`, 'DELETE');
    const [newProgress, progressing, progress] = useAPI('/children/progress', 'POST');
    const { state, setState, handleInputChange, handleFileChange, handleSubmitBuilder } = useForm({
        illustration: '',
    });

    const handleSubmit = handleSubmitBuilder(() => {
        submit(state);
    });

    const handleDelete = () => {
        remove();
    };

    React.useEffect(() => {
        if (removed && currentSubmission && currentSubmission?.illustration) {
            currentSubmission.illustration = undefined;
            setState({
                illustration: '',
            });
        }
    }, [removed, currentSubmission, setState, remove]);

    React.useEffect(() => {
        if (
            currentSubmission &&
            currentSubmission?.illustration &&
            Object.keys(currentSubmission?.illustration).length
        ) {
            const { illustration } = currentSubmission;
            setState(illustration);
            setSubmitted(true);
        }
    }, [currentSubmission, setState]);

    React.useEffect(() => {
        if (
            submission &&
            submission?.illustration &&
            Object.keys(submission?.illustration).length
        ) {
            progress({ drawing: true });
            setSubmitted(true);
        }
        if (removed && Object.keys(removed).length) {
            progress({ drawing: false });
            setState({
                illustration: '',
            });
            setSubmitted(false);
        }
    }, [submission, removed, progress, setState, currentSubmission]);

    React.useEffect(() => {
        if (newProgress && onUpdate) onUpdate();
        if (newProgress?.progress?.drawing) history.push('/kids-dashboard');
    }, [history, onUpdate, newProgress]);

    const { illustration } = state;
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <Card className={classes.card}>
                <div className={classes.appBar}>
                    <div className={classes.headerFont}>Ready, Set... DRAW!</div>
                </div>
                <CardContent className={classes.content}>
                    <h2 className={classes.promptText}>Draw your favorite part of the story!</h2>
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
                            src={illustration}
                            className={classes.preview}
                            alt='Your illustration submission'
                        />
                    )}
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
                        {' '}
                        <h2>Sending Progress...</h2>
                        <LinearProgress variant='query' color='secondary' />
                    </>
                )}
            </div>
            {submitting && <LinearProgress variant='query' color='secondary' />}
        </form>
    );
};

export { DrawingForm };
