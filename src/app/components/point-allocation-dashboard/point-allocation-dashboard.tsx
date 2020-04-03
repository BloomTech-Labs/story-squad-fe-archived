import React, { useState, useEffect } from 'react';
import 'typeface-nunito';
import { Button, Typography, Container, Grid, CircularProgress } from '@material-ui/core';
import { Child } from '../../models';
import { Link } from 'react-router-dom';
import { useForm, useAPI } from '../../hooks';
import { ValidatorForm } from 'react-material-ui-form-validator';
import ava1 from './img/cam.png';
import ava2 from './img/Hero13.png';
import { useStyles } from './styles';
import { Avatar, SubmissionDisplay, Header } from './index';

interface PointCardProps {
    child: Child;
}

const PointDashboard: React.FC<PointCardProps> = ({ child }) => {
    const [matchInfo] = useAPI(`/battlesRoutes/battles`, 'GET', false);
    const [points, updating, updatePoints] = useAPI(`/battlesRoutes/battles`, 'PUT');
    const { state, handleInputChange, handleSubmitBuilder } = useForm({
        story1Points: 10,
        story2Points: 10,
        pic1Points: 10,
        pic2Points: 10,
    });
    const [remainingPoints, setRemainingPoints] = useState(100);
    const [error, setError] = useState(false);
    const [thisMatch, setThisMatch] = useState();
    const [student, setStudent] = useState({
        username: '',
        story: {
            id: 0,
            story: {
                page1: '',
                page2: '',
                page3: '',
                page4: '',
                page5: '',
            },
        },
        illustration: {
            id: 0,
            illustration: '',
        },
    });
    const [teammate, setTeammate] = useState({
        username: '',
        story: {
            id: 0,
            story: {
                page1: '',
                page2: '',
                page3: '',
                page4: '',
                page5: '',
            },
        },
        illustration: {
            id: 0,
            illustration: '',
        },
    });
    const classes = useStyles({});

    useEffect(() => {
        setRemainingPoints(
            100 - (state.story1Points + state.story2Points + state.pic1Points + state.pic2Points)
        );
    }, [state]);

    useEffect(() => {
        if (matchInfo) {
            const { student, teammate } = matchInfo.thisMatch.team;
            const { studentUsername, studentStory, studentIllustration } = student;
            const { teammateUsername, teammateStory, teammateIllustration } = teammate;
            setThisMatch({ ...matchInfo.thisMatch });
            setStudent({ ...student });
            setTeammate({ ...teammate });
        }
    }, [matchInfo]);

    const handleSubmit = () => {
        const newPoints = {
            stories: [
                { id: student.story.id, points: state.story1Points },
                { id: teammate.story.id, points: state.story2Points },
            ],
            illustrations: [
                { id: student.illustration.id, points: state.pic1Points },
                { id: teammate.illustration.id, points: state.pic2Points },
            ],
        };
        console.log(newPoints);
        if (remainingPoints === 0 && child.progress.teamReview === false) {
            updatePoints(newPoints);
            return console.log('Success!');
        } else {
            setError(true);
        }
    };

    console.log(state);

    return (
        <div>
            {/* Container for avatars + inputs + buttons */}
            {student === undefined || teammate === undefined ? (
                <div>
                    <CircularProgress />
                </div>
            ) : (
                <>
                    <ValidatorForm
                        onSubmit={handleSubmit}
                        onError={(errors) => console.log(errors)}>
                        <Container maxWidth='lg'>
                            <Grid container direction='column'>
                                <Header remainingPoints={remainingPoints} />
                                <Grid container alignItems='center'>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={4}
                                        className={classes.avatarMargin}>
                                        <Avatar username={student.username} avatar={ava1} />
                                    </Grid>
                                    <Grid container md={8} className={classes.topContainer}>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <SubmissionDisplay
                                                key='story1Points'
                                                username={student.username}
                                                submission={student.story.story.page1}
                                                points={state.story1Points}
                                                handleChange={handleInputChange('story1Points')}
                                                type='Story'
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <SubmissionDisplay
                                                key='pic1Points'
                                                username={student.username}
                                                submission={student.illustration.illustration}
                                                type='Illustration'
                                                handleChange={handleInputChange('pic1Points')}
                                                points={state.pic1Points}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container alignItems='center'>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={12}
                                        md={4}
                                        className={classes.avatarMargin}>
                                        <Avatar username={teammate.username} avatar={ava2} />
                                    </Grid>
                                    <Grid container md={8} className={classes.bottomContainer}>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <SubmissionDisplay
                                                key='story2Points'
                                                username={teammate.username}
                                                submission={teammate.story.story.page1}
                                                points={state.story2Points}
                                                handleChange={handleInputChange('story2Points')}
                                                type='Story'
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <SubmissionDisplay
                                                key='pic2Points'
                                                username={teammate.username}
                                                submission={teammate.illustration.illustration}
                                                points={state.pic2Points}
                                                handleChange={handleInputChange('pic2Points')}
                                                type='Illustration'
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={4} className={classes.backDiv}>
                                        <div className={classes.button}>
                                            <Link to={`/kids-dashboard`}>
                                                <Button
                                                    className={classes.orangeButton}
                                                    type='button'>
                                                    Back
                                                </Button>
                                            </Link>
                                        </div>
                                    </Grid>
                                    <Grid container xs={8} className={classes.nextDiv}>
                                        <Grid item xs={6} />
                                        <Grid item xs={6}>
                                            <div className={classes.button}>
                                                <Button
                                                    className={classes.orangeButton}
                                                    type='submit'>
                                                    Next
                                                </Button>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    </ValidatorForm>
                </>
            )}
        </div>
    );
};

export { PointDashboard };
