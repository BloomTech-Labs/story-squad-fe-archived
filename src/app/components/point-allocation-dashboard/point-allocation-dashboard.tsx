import React, { useState, useEffect } from 'react';
import 'typeface-nunito';
import {
    Button,
    Typography,
    Container,
    Grid,
    Modal,
    Fade,
    Backdrop,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    CircularProgress,
} from '@material-ui/core';
import { Child } from '../../models';
import { Link } from 'react-router-dom';
import { useForm, useAPI } from '../../hooks';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
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
    const [remainingPoints, setRemainingPoints] = useState(60);
    const classes = useStyles({});
    const [error, setError] = useState(false);
    const [thisMatch, setThisMatch] = useState();
    const [student, setStudent] = useState();
    const [teammate, setTeammate] = useState();

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
                        <Container className={classes.containerStyling}>
                            <Grid container>
                                <Header remainingPoints={remainingPoints} />
                                {/* End header code  */}
                                {/* Row 1 */}
                                <Grid
                                    container
                                    direction='row'
                                    justify='center'
                                    alignItems='center'>
                                    <Avatar username={student.username} avatar={ava1} />
                                    <SubmissionDisplay
                                        key='story1Points'
                                        username={student.username}
                                        submission={student.story.story.page1}
                                        points={state.story1Points}
                                        type='Story'
                                        handleInputChange={handleInputChange('story1Points')}
                                    />
                                    <SubmissionDisplay
                                        key='pic1Points'
                                        username={student.username}
                                        submission={student.illustration.illustration}
                                        points={state.pic1Points}
                                        type='Illustration'
                                        handleInputChange={handleInputChange}
                                    />
                                </Grid>
                                {/* Row 3 */}
                                <Grid
                                    container
                                    direction='row'
                                    justify='center'
                                    alignItems='center'>
                                    <Avatar username={teammate.username} avatar={ava2} />
                                    <SubmissionDisplay
                                        key='story2Points'
                                        username={teammate.username}
                                        submission={teammate.story.story.page1}
                                        points={state.story2Points}
                                        type='Story'
                                        handleInputChange={handleInputChange}
                                    />
                                    <SubmissionDisplay
                                        key='pic2Points'
                                        username={teammate.username}
                                        submission={teammate.illustration.illustration}
                                        points={state.pic2Points}
                                        type='Illustration'
                                        handleInputChange={handleInputChange}
                                    />
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
