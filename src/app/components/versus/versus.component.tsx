import React, { useState, useEffect } from 'react';
import 'typeface-nunito';
import ava1 from '../point-allocation-dashboard/img/cam.png';
import ava2 from '../point-allocation-dashboard/img/Hero13.png';
import story1 from './img/drawing3.jpg';
import story2 from './img/drawing1.jpg';
import pic1 from './img/drawing3.jpg';
import pic2 from './img/drawing1.jpg';
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
    const [matchInfo] = useAPI(`/battlesRoutes/battles`, 'GET', false);
    ///TODO: ensure correct props are present on Point Card Props. student, teammate (opposition objects) to pass down pts, submissions, username, etc
    const [thisMatch, setThisMatch] = useState();
    ////////state setup from point allocation copied//////
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
        avatar: '',
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
    //student/teammate submissions state
    useEffect(() => {
        if (matchInfo) {
            console.log('VESUS MATCH INFOOOOOOO', matchInfo);
            const { student, teammate } = matchInfo.thisMatch.team;
            const { studentUsername, studentStory, studentIllustration } = student;
            const { teammateUsername, teammateStory, teammateIllustration } = teammate;
            setThisMatch({ ...matchInfo.thisMatch });
            setStudent({ ...student });
            setTeammate({ ...teammate });
        }
    }, [matchInfo]);

    //modal
    const { state } = useForm({
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
        return console.log('submit on vs');
        {
            /* TODO: onsubmit  need to be changed or not needed */
        }
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
                        <div className={classes.teamName}>
                            <Typography className={classes.h4Styling}>Giants</Typography>
                            <Typography className={classes.h4Styling}>VS</Typography>
                            {/* team2 placeholder*/}
                            <Typography className={classes.h4Styling}>Cowboys</Typography>
                        </div>
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
                            <div className={classes.playerName}>{student.username}</div>
                        </div>
                        <div className={classes.rightPlayer}>
                            <div className={classes.playerName}>Name2</div>
                            <Avatar src={ava2}></Avatar>
                        </div>
                    </div>
                    <div className={classes.subRow}>
                        {/* High story1 */}
                        <ValidatorForm
                            onSubmit={handleSubmit}
                            onError={(errors) => console.log(errors)}>
                            <Grid item xs={12} sm={12} md={6}>
                                <SubmissionDisplay
                                    key='story1Points'
                                    username={student.username}
                                    submission={student.story.story.page1}
                                    // points={state.story1Points}
                                    points={10}
                                    type='Story'
                                />
                            </Grid>
                        </ValidatorForm>
                        <div className={classes.totalScore}>
                            <p>Total</p> {/* High story1 + high story2 pts */}
                        </div>
                        {/* High story2 */}
                        <ValidatorForm
                            onSubmit={handleSubmit}
                            onError={(errors) => console.log(errors)}>
                            <Grid item xs={12} sm={12} md={6}>
                                <SubmissionDisplay
                                    key='story1Points'
                                    // points={state.story1Points}
                                    username={'name2'}
                                    submission={story2}
                                    points={10}
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
                            <div className={classes.playerName}>{teammate.username}</div>
                        </div>
                        <div className={classes.rightPlayer}>
                            <div className={classes.playerName}>Name4</div>
                            <Avatar src={ava2}></Avatar>
                        </div>
                    </div>
                    <div className={classes.subRow}>
                        {/* Low story1 */}
                        <ValidatorForm
                            onSubmit={handleSubmit}
                            onError={(errors) => console.log(errors)}>
                            <Grid item xs={12} sm={12} md={6}>
                                <SubmissionDisplay
                                    key='story1Points'
                                    username={teammate.username}
                                    submission={teammate.story.story.page1}
                                    // points={state.story1Points}
                                    points={10}
                                    type='Story'
                                />
                            </Grid>
                        </ValidatorForm>
                        <div className={classes.totalScore}>
                            <p>Total</p> {/* low story1 + low story2 pts */}
                        </div>
                        {/* Low story2 */}
                        <ValidatorForm
                            onSubmit={handleSubmit}
                            onError={(errors) => console.log(errors)}>
                            <Grid item xs={12} sm={12} md={6}>
                                <SubmissionDisplay
                                    key='story1Points'
                                    // points={state.story1Points}
                                    username={'name4'}
                                    submission={story2}
                                    points={10}
                                    type='Story'
                                />
                            </Grid>
                        </ValidatorForm>
                    </div>
                    <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
                </Grid>
            </Grid>
            <Grid className={classes.bottomRow}>
                <Grid className={classes.picture1}>
                    <div className={classes.nameRow}>
                        <div className={classes.leftPlayer}>
                            <Avatar src={ava1}></Avatar>
                            <div className={classes.playerName}>{student.username}</div>
                        </div>
                        <div className={classes.rightPlayer}>
                            <div className={classes.playerName}>Name4</div>
                            <Avatar src={ava2}></Avatar>
                        </div>
                    </div>
                    <div className={classes.subRow}>
                        {/* high pic1 */}
                        <ValidatorForm
                            onSubmit={handleSubmit}
                            onError={(errors) => console.log(errors)}>
                            <Grid item xs={12} sm={12} md={6}>
                                <SubmissionDisplay
                                    key='pic1Points'
                                    username={student.username}
                                    submission={student.illustration.illustration}
                                    // points={state.story1Points}
                                    points={10}
                                    type='Illustration'
                                />
                            </Grid>
                        </ValidatorForm>
                        <Grid item xs={2}>
                            <div className={classes.button}>
                                <Link to={`/kids-dashboard/points-dashboard`}>
                                    <Button className={classes.orangeButton} type='button'>
                                        Back
                                    </Button>
                                </Link>
                            </div>
                        </Grid>
                        <div className={classes.totalScore}>
                            <p>Total</p> {/* High pic1 + high pic2 pts */}
                        </div>
                        {/* high pic2 */}
                        <ValidatorForm
                            onSubmit={handleSubmit}
                            onError={(errors) => console.log(errors)}>
                            <Grid item xs={12} sm={12} md={6}>
                                <SubmissionDisplay
                                    key='pic1Points'
                                    // points={state.story1Points}
                                    username={'name4'}
                                    submission={pic2}
                                    points={10}
                                    type='Illustration'
                                />
                            </Grid>
                        </ValidatorForm>
                    </div>
                    <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
                </Grid>
                <Grid className={classes.picture2}>
                    <div className={classes.nameRow}>
                        <div className={classes.leftPlayer}>
                            <Avatar src={ava1}></Avatar>
                            <div className={classes.playerName}>{teammate.username}</div>
                        </div>
                        <div className={classes.rightPlayer}>
                            <div className={classes.playerName}>Name2</div>
                            <Avatar src={ava2}></Avatar>
                        </div>
                    </div>
                    <div className={classes.subRow}>
                        {/* Low pic1 */}
                        <ValidatorForm
                            onSubmit={handleSubmit}
                            onError={(errors) => console.log(errors)}>
                            <Grid item xs={12} sm={12} md={6}>
                                <SubmissionDisplay
                                    key='pic1Points'
                                    username={teammate.username}
                                    submission={teammate.illustration.illustration}
                                    // points={state.story1Points}
                                    points={10}
                                    type='Illustration'
                                />
                            </Grid>
                        </ValidatorForm>
                        <div className={classes.totalScore}>
                            <p>Total</p> {/* low pic1 + low pic2 pts */}
                        </div>
                        {/* Low Pic2 */}
                        <ValidatorForm
                            onSubmit={handleSubmit}
                            onError={(errors) => console.log(errors)}>
                            <Grid item xs={12} sm={12} md={6}>
                                <SubmissionDisplay
                                    key='pic1Points'
                                    // points={state.story1Points}
                                    username={'name2'}
                                    submission={pic2}
                                    points={10}
                                    type='Illustration'
                                />
                            </Grid>
                        </ValidatorForm>
                    </div>
                    <Grid item xs={2}>
                        <div className={classes.button}>
                            <Link to={`/kids-dashboard/nextpage`}>
                                <Button className={classes.orangeButton} type='submit'>
                                    Vote
                                </Button>
                            </Link>
                        </div>
                    </Grid>
                    <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
                </Grid>
            </Grid>
        </Container>
    );
};

export { Versus };
