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
import './PointAllocation.css';

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

    // console.log('child', child);

    const [remainingPoints, setRemainingPoints] = useState(100);
    const [error, setError] = useState(false);
    const [thisMatch, setThisMatch] = useState();
    const [teamReviewTime, setTeamReviewTime] = useState(new Date());

    const [disabledForm, setDisabled] = useState(child.progress.teamReview);
    const [student, setStudent] = useState<Teammember | undefined>(undefined);
    const [teammate, setTeammate] = useState<Teammember | undefined>(undefined);

    console.log(student, teammate);
    const classes = useStyles({});

    useEffect(() => {
        console.log('changing points');
        setRemainingPoints(
            100 - (state.story1Points + state.story2Points + state.pic1Points + state.pic2Points)
        );
    }, [state]);
    console.log(teamReviewTime);
    useEffect(() => {
        if (matchInfo) {
            const { student, teammate } = matchInfo.thisMatch.team;
            setThisMatch({ ...matchInfo.thisMatch });
            setStudent({ ...student });
            setTeammate({ ...teammate });
            setTeamReviewTime(new Date(matchInfo.thisMatch.teamReviewEndDate));
        }
    }, [child.progress.teamReview, matchInfo]);
    // console.log(new Date(teamReviewTime.getTime() - new Date().getTime()));
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
            return console.log('Success!');
        } else if (child.progress.teamReview === true) {
            // history.push('/matchup');

            return console.log('Already submitted points!');
        } else {
            setError(true);
        }
    };
    window.localStorage.removeItem('visited');
    const submissionCheck = (submission) =>
        typeof submission === 'string' ? [submission] : Object.values(submission);
    return (
        <div className={classes.root}>
            {/* Container for avatars + inputs + buttons */}
            {matchInfo?.thisMatch.gotoMatchmaking === true ? (
                history.push('/matchup')
            ) : !student || !teammate ? (
                <div>
                    {console.log('loading')}
                    <CircularProgress />
                </div>
            ) : (
                <>
                    <Header
                        remainingPoints={remainingPoints}
                        teamReviewTime={teamReviewTime}
                        disabledForm={disabledForm}
                    />
                    <ValidatorForm
                        onSubmit={handleSubmit}
                        onError={(errors) => console.log(errors)}>
                        <div className={`col-hero`}>
                            <Avatar username={student.username} avatar={ava1} />
                        </div>
                        <div className={`col-input`}>
                            <SubmissionDisplay
                                child={student}
                                key='story1Points'
                                submission={submissionCheck(student.story.story)}
                                points={state.story1Points}
                                handleChange={handleInputChange('story1Points')}
                                type='Story'
                                disabledForm={disabledForm}
                            />

                            <SubmissionDisplay
                                key='pic1Points'
                                child={student}
                                submission={submissionCheck(student.illustration.illustration)}
                                type='Illustration'
                                handleChange={handleInputChange('pic1Points')}
                                points={state.pic1Points}
                                disabledForm={disabledForm}
                            />
                        </div>

                        <div className='col-hero'>
                            <Avatar username={teammate.username} avatar={ava2} />
                        </div>

                        <div className='col-input'>
                            <SubmissionDisplay
                                child={student}
                                key='story2Points'
                                submission={submissionCheck(teammate.story.story)}
                                points={state.story2Points}
                                handleChange={handleInputChange('story2Points')}
                                type='Story'
                                disabledForm={disabledForm}
                            />
                            <SubmissionDisplay
                                child={student}
                                key='pic2Points'
                                submission={submissionCheck(teammate.illustration.illustration)}
                                points={state.pic2Points}
                                handleChange={handleInputChange('pic2Points')}
                                type='Illustration'
                                disabledForm={disabledForm}
                            />
                        </div>

                        <Grid container>
                            <Grid item xs={4} className={classes.backDiv}>
                                <div className={classes.button}>
                                    <Link to={`/kids-dashboard`}>
                                        <Button className={classes.orangeButton} type='button'>
                                            Back
                                        </Button>
                                    </Link>
                                </div>
                            </Grid>
                            <Grid container xs={8} className={classes.nextDiv}>
                                <div className={classes.button}>
                                    <Button
                                        // disabled={disabledForm}
                                        className={classes.orangeButton}
                                        type='submit'>
                                        Match Up!
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </ValidatorForm>
                </>
            )}
        </div>
    );
};

export { PointDashboard };
