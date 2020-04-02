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
import { useStyles } from './styles';
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
    // const [newProgress, progressing, progress] = useAPI('/children/progress', 'POST');
    const { state, setState, handleInputChange, handleFileChange, handleSubmitBuilder } = useForm({
        illustration: '',
    });

    const handleSubmit = handleSubmitBuilder(() => {
        submit(state);
    });

    const handleDelete = () => {
        remove();
    };

    useEffect(() => {
        //initial mount render
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

    useEffect(() => {
        //checks if BE returned deleted as removed 4.1.20
        if (removed) {
            setState({
                illustration: '',
            });
            setSubmitted(false);
        }
    }, [removed, remove]);

    useEffect(() => {
        //POST: checks if BE returned submission success as submission 4.1.20
        if (submission && submission?.illustrations && submission?.illustrations.illustration) {
            setSubmitted(true);
        }
    }, [submission, setState, currentSubmission]);

    useEffect(() => {
        if (onUpdate) onUpdate();
        if (submission && submission?.illustrations && submission?.illustrations.illustration) {
            history.push('/kids-dashboard');
        }
    }, [submitted]);

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
