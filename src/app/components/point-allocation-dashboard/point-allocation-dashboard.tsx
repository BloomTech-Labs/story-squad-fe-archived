import React, { useState, useEffect } from 'react';
import 'typeface-nunito';
import { Button, Container, Grid, CircularProgress } from '@material-ui/core';
import { Child } from '../../models';
import { Link, useHistory } from 'react-router-dom';
import { useForm, useAPI } from '../../hooks';
import { ValidatorForm } from 'react-material-ui-form-validator';
import ava1 from './img/cam.png';
import ava2 from './img/Hero13.png';
import { useStyles } from './point-allocation-styles';
import { Avatar, SubmissionDisplay, Header } from './index';

interface PointCardProps {
    child: Child;
}

interface Teammember {
    username: string;
    story: {
        id: number;
        story: {
            page1: string;
            page2?: string;
            page3?: string;
            page4?: string;
            page5?: string;
        };
    };
    illustration: {
        id: number;
        illustration: string;
    };
}

const PointDashboard: React.FC<PointCardProps> = ({ child }) => {
    const history = useHistory();
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
    const [teamReviewTime, setTeamReviewTime] = useState(new Date());
    const [disabledForm, setDisabled] = useState(child.progress.teamReview);
    const [student, setStudent] = useState<Teammember | undefined>(undefined);
    const [teammate, setTeammate] = useState<Teammember | undefined>(undefined);

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
            setTeamReviewTime(new Date(matchInfo.thisMatch.teamReviewEndDate));
        }
    }, [child.progress.teamReview, matchInfo]);

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
        if (remainingPoints === 0 && child.progress.teamReview === false) {
            updatePoints(newPoints);
            setDisabled(true);
        } else if (child.progress.teamReview === true) {
            history.push('/matchup');
        } else {
            setError(true);
        }
    };
    window.localStorage.removeItem('visited');

    const submissionCheck = (submission) =>
        typeof submission === 'string' ? [submission] : Object.values(submission);
    return (
        <div>
            {/* Container for avatars + inputs + buttons */}
            {matchInfo?.thisMatch.gotoMatchmaking === true ? (
                history.push('/matchup')
            ) : !student || !teammate ? (
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
                                <Header
                                    remainingPoints={remainingPoints}
                                    teamReviewTime={teamReviewTime}
                                    disabledForm={disabledForm}
                                />

                                <fieldset disabled={disabledForm}>
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
                                                    submission={submissionCheck(
                                                        student.story.story
                                                    )}
                                                    points={state.story1Points}
                                                    handleChange={handleInputChange('story1Points')}
                                                    type='Story'
                                                    disabledForm={disabledForm}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6}>
                                                <SubmissionDisplay
                                                    key='pic1Points'
                                                    username={student.username}
                                                    submission={submissionCheck(
                                                        student.illustration.illustration
                                                    )}
                                                    type='Illustration'
                                                    handleChange={handleInputChange('pic1Points')}
                                                    points={state.pic1Points}
                                                    disabledForm={disabledForm}
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
                                                    submission={submissionCheck(
                                                        teammate.story.story
                                                    )}
                                                    points={state.story2Points}
                                                    handleChange={handleInputChange('story2Points')}
                                                    type='Story'
                                                    disabledForm={disabledForm}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6}>
                                                <SubmissionDisplay
                                                    key='pic2Points'
                                                    username={teammate.username}
                                                    submission={submissionCheck(
                                                        teammate.illustration.illustration
                                                    )}
                                                    points={state.pic2Points}
                                                    handleChange={handleInputChange('pic2Points')}
                                                    type='Illustration'
                                                    disabledForm={disabledForm}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={4} className={classes.backDiv}>
                                                <Link to={`/kids-dashboard`}>
                                                    <div className={classes.button}>
                                                        <Button
                                                            className={classes.orangeButton}
                                                            type='button'>
                                                            Back
                                                        </Button>
                                                    </div>
                                                </Link>
                                            </Grid>
                                            <Grid container xs={8} className={classes.nextDiv}>
                                                {/* <Grid item xs={6} />
                                                <Grid item xs={6}> */}
                                                <div className={classes.button}>
                                                    {disabledForm ? (
                                                        <p className={classes.waiting}>
                                                            Waiting for matchup to begin...
                                                        </p>
                                                    ) : null}
                                                    <Button
                                                        disabled={disabledForm}
                                                        className={classes.orangeButton}
                                                        type='submit'>
                                                        Match Up!
                                                    </Button>
                                                </div>
                                                {/* </Grid> */}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </fieldset>
                            </Grid>
                        </Container>
                    </ValidatorForm>
                </>
            )}
        </div>
    );
};

export { PointDashboard };
