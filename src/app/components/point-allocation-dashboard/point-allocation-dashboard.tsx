import React, { useState, useEffect } from 'react';
import 'typeface-nunito';
import { Button, Typography, Container, Grid, CircularProgress } from '@material-ui/core';
import { Child } from '../../models';
import { Link } from 'react-router-dom';
import { useForm, useAPI } from '../../hooks';
import { ValidatorForm } from 'react-material-ui-form-validator';
import ava1 from './img/cam.png';
import ava2 from './img/Hero13.png';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Avatar, SubmissionDisplay, Header } from './index';

interface PointCardProps {
    child: Child;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
        avatarMargin: {
            backgroundColor: '#B5D33D',
            borderRight: '14px solid',
            borderLeft: '14px solid',
            padding: '10px',
        },
        containerStyling: {
            height: '274px',
        },
        sectionContainer: {
            border: '7px solid #000',
            backgroundColor: '#EB7D5B',
        },
        button: {
            display: 'flex',
            justifyContent: 'center',
            alignItem: 'center',
        },
    })
);

const PointDashboard: React.FC<PointCardProps> = ({ child }) => {
    const [matchInfo] = useAPI(`/battlesRoutes/battles`, 'GET', false);
    const [points, updating, updatePoints] = useAPI(`/battlesRoutes/battles`, 'PUT');
    const { state, handleInputChange, handleSubmitBuilder } = useForm({
        story1Points: 0,
        story2Points: 0,
        pic1Points: 0,
        pic2Points: 0,
    });
    const [remainingPoints, setRemainingPoints] = useState(100);
    const [error, setError] = useState(false);
    const [thisMatch, setThisMatch] = useState();
    const [student, setStudent] = useState();
    const [teammate, setTeammate] = useState();
    const classes = useStyles({});

    useEffect(() => {
        setRemainingPoints(
            100 - (state.story1Points + state.story2Points + state.pic1Points + state.pic2Points)
        );
    }, [state]);

    useEffect(() => {
        if (matchInfo) {
            setThisMatch({ ...matchInfo.thisMatch });
            setStudent({ ...matchInfo.thisMatch.team.student });
            setTeammate({ ...matchInfo.thisMatch.team.teammate });
            return console.log('inside', thisMatch);
        }
    }, [matchInfo]);

    const handleSubmit = () => {
        if (remainingPoints === 0 && child.progress.teamReview === false) {
            updatePoints({
                story1id: student.story.id,
                story1Points: state.story1Points,
                story2id: teammate.story.id,
                story2Points: state.story2Points,
                pic1id: student.illustration.id,
                pic1Points: state.pic1Points,
                pic2id: teammate.illustration.id,
                pic2Points: state.pic2Points,
            });
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
                                <Grid
                                    container
                                    alignItems='center'
                                    className={classes.sectionContainer}>
                                    <Grid item sm={12} md={4} className={classes.avatarMargin}>
                                        <Avatar username={student.username} avatar={ava1} />
                                    </Grid>
                                    <Grid item sm={12} md={4}>
                                        <SubmissionDisplay
                                            key='story1Points'
                                            username={student.username}
                                            submission={student.story.story.page1}
                                            points={state.story1Points}
                                            handleChange={handleInputChange('story1Points')}
                                            type='Story'
                                        />
                                    </Grid>
                                    <Grid item sm={12} md={4}>
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
                                <Grid
                                    container
                                    alignItems='center'
                                    className={classes.sectionContainer}>
                                    <Grid item sm={12} md={4} className={classes.avatarMargin}>
                                        <Avatar username={teammate.username} avatar={ava2} />
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
                                    <Grid item sm={12} md={4}>
                                        <SubmissionDisplay
                                            key='story2Points'
                                            username={teammate.username}
                                            submission={teammate.story.story.page1}
                                            points={state.story2Points}
                                            handleChange={handleInputChange('story2Points')}
                                            type='Story'
                                        />
                                    </Grid>
                                    <Grid item sm={12} md={4}>
                                        <SubmissionDisplay
                                            key='pic2Points'
                                            username={teammate.username}
                                            submission={teammate.illustration.illustration}
                                            points={state.pic2Points}
                                            handleChange={handleInputChange('pic2Points')}
                                            type='Illustration'
                                        />
                                        <div className={classes.button}>
                                            <Button className={classes.orangeButton} type='submit'>
                                                Next
                                            </Button>
                                        </div>
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
