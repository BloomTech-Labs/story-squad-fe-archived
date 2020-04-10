import React, { useState, useEffect } from 'react';
import 'typeface-nunito';
import ava1 from '../point-allocation-dashboard/img/cam.png';
import ava2 from '../point-allocation-dashboard/img/Hero13.png';
import hs1 from './img/meStory.jpg';
import hs2 from './img/pg1Story.jpg';
import ls1 from './img/story4.jpg';
import ls2 from './img/pg1Story3.jpg';
import hp1 from './img/drawing1.jpg';
import hp2 from './img/drawing2.jpg';
import lp1 from './img/drawing3.jpg';
import lp2 from './img/pic4.jpg';
import {
    Button,
    Avatar,
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
    Card,
    Checkbox,
    Paper,
    Popper,
    MenuItem,
    MenuList,
    Grow,
    ClickAwayListener,
} from '@material-ui/core';
import { useStyles } from './versus-styles';
import { Child } from '../../models';
import { Link } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import vsImg from './img/VS.png';
import { SubmissionDisplay } from './modals/subDisplay.component';
import { useForm, useAPI } from '../../hooks';
interface PointCardProps {
    child: Child;
}
const Versus: React.FC<PointCardProps> = ({ child }) => {
    const classes = useStyles({});
    ////////state setup from point allocation copied//////
    // const [student, setStudent] = useState({
    //     username: '',
    //     story: {
    //         id: 0,
    //         story: {
    //             page1: '',
    //             page2: '',
    //             page3: '',
    //             page4: '',
    //             page5: '',
    //         },
    //     },
    //     illustration: {
    //         id: 0,
    //         illustration: '',
    //     },
    // });
    // const [teammate, setTeammate] = useState({
    //     username: '',
    //     story: {
    //         id: 0,
    //         story: {
    //             page1: '',
    //             page2: '',
    //             page3: '',
    //             page4: '',
    //             page5: '',
    //         },
    //     },
    //     illustration: {
    //         id: 0,
    //         illustration: '',
    //     },
    // });
    //student/teammate submissions state

    //modal
    const { state, handleInputChange, handleSubmitBuilder } = useForm({
        story1Points: 10,
        story2Points: 10,
        pic1Points: 10,
        pic2Points: 10,
    });
    const handleSubmit = () => {
        const newPoints = {
            stories: [
                { id: 1, points: state.story1Points },
                { id: 2, points: state.story2Points },
            ],
            illustrations: [
                { id: 1, points: state.pic1Points },
                { id: 2, points: state.pic2Points },
            ],
        };
        return console.log('submit vs!');
    };

    return (
        <Container className={classes.containerStyling}>
            <Grid container>
                {/* Header code */}
                <Grid container direction='row' className={classes.appBar}>
                    <Grid
                        container
                        item
                        direction='column'
                        justify='space-around'
                        alignItems='center'>
                        <Typography className={classes.h2Styling} variant='h2'>
                            The Match Up
                        </Typography>
                        {/* team1 placeholder*/}
                        <Typography className={classes.h3Styling}>VS</Typography>
                        {/* team2 placeholder*/}
                        <Typography className={classes.h3Styling}>
                            201 Points Needed To Win!
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.topRow}>
                <Grid className={classes.story1}>
                    <div className={classes.nameRow}>
                        <div className={classes.leftPlayer}>
                            <Avatar className={classes.avatarMargin} src={ava1}></Avatar>
                            <h3>Name1</h3>
                        </div>
                        <div className={classes.rightPlayer}>
                            <h3>Name2</h3>
                            <Avatar src={ava2}></Avatar>
                        </div>
                    </div>
                    <div className={classes.subRow}>
                        {/* <Avatar>High story</Avatar> */}
                        <ValidatorForm
                            onSubmit={handleSubmit}
                            onError={(errors) => console.log(errors)}>
                            <Grid item xs={12} sm={12} md={6}>
                                <SubmissionDisplay
                                    key='story1Points'
                                    // username={student.username}
                                    // submission={student.story.story.page1}
                                    // points={state.story1Points}
                                    username={'name1'}
                                    submission={hs1}
                                    points={10}
                                    handleChange={handleInputChange('story1Points')}
                                    type='Story'
                                />
                            </Grid>
                        </ValidatorForm>
                        <div className={classes.totalScore}>
                            <p>Total</p>
                        </div>
                        {/* <Avatar>High story</Avatar> */}
                        <ValidatorForm
                            onSubmit={handleSubmit}
                            onError={(errors) => console.log(errors)}>
                            <Grid item xs={12} sm={12} md={6}>
                                <SubmissionDisplay
                                    key='story1Points'
                                    // username={student.username}
                                    // submission={student.story.story.page1}
                                    // points={state.story1Points}
                                    username={'name3'}
                                    submission={hs2}
                                    points={10}
                                    handleChange={handleInputChange('story2Points')}
                                    type='Story'
                                />
                            </Grid>
                        </ValidatorForm>
                    </div>
                    <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
                </Grid>
                <Grid className={classes.story2}>
                    <div className={classes.nameRow}>
                        <div className={classes.leftPlayer}>
                            <Avatar src={ava1}></Avatar>
                            <h3>Name3</h3>
                        </div>
                        <div className={classes.rightPlayer}>
                            <h3>Name4</h3>
                            <Avatar src={ava2}></Avatar>
                        </div>
                    </div>
                    <div className={classes.subRow}>
                        <Avatar>Low story</Avatar>
                        <div className={classes.totalScore}>
                            <p>Total</p>
                        </div>
                        <Avatar>Low story</Avatar>
                    </div>
                    <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
                </Grid>
            </Grid>
            <Grid className={classes.bottomRow}>
                <Grid className={classes.picture1}>
                    <div className={classes.nameRow}>
                        <div className={classes.leftPlayer}>
                            <Avatar src={ava1}></Avatar>
                            <h3>Name1</h3>
                        </div>
                        <div className={classes.rightPlayer}>
                            <h3>Name4</h3>
                            <Avatar src={ava2}></Avatar>
                        </div>
                    </div>
                    <div className={classes.subRow}>
                        <Avatar>high pic</Avatar>
                        {/* <Grid item xs={2}>
                            <div className={classes.button}>
                                <Link to={`/kids-dashboard/points-dashboard`}>
                                    <Button className={classes.orangeButton} type='button'>
                                        Back
                                    </Button>
                                </Link>
                            </div>
                        </Grid> */}
                        <div className={classes.totalScore}>
                            <p>Total</p>
                        </div>
                        <Avatar>high pic</Avatar>
                    </div>
                    <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
                </Grid>
                <Grid className={classes.picture2}>
                    <div className={classes.nameRow}>
                        <div className={classes.leftPlayer}>
                            <Avatar src={ava1}></Avatar>
                            <h3>Name3</h3>
                        </div>
                        <div className={classes.rightPlayer}>
                            <h3>Name2</h3>
                            <Avatar src={ava2}></Avatar>
                        </div>
                    </div>
                    <div className={classes.subRow}>
                        <Avatar>Low pic</Avatar>
                        <div className={classes.totalScore}>
                            <p>Total</p>
                        </div>
                        <Avatar>Low Pic</Avatar>
                        {/* <Grid item xs={2}>
                            <div className={classes.button}>
                                <Link to={`/kids-dashboard/nextpage`}>
                                    <Button className={classes.orangeButton} type='submit'>
                                        Vote
                                    </Button>
                                </Link>
                            </div>
                        </Grid> */}
                    </div>
                    <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
                </Grid>
            </Grid>
        </Container>
    );
};

export { Versus };
