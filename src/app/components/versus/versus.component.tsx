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
import vsImg from './img/VS.png';
import { SubmissionDisplay } from './modals/subDisplay.component';
import { useAPI } from '../../hooks';

interface VersusProps {
    thisBattle?: 0;
}
const Versus: React.FC<VersusProps> = ({ thisBattle }) => {
    const classes = useStyles({});
    const [matchInfo] = useAPI(`/battlesRoutes/battles`, 'GET', false);
    const [response] = useAPI(`/versusRoutes/versus`, 'GET', false);
    ///TODO: ensure correct props are present on Point Card Props. student, teammate (opposition objects) to pass down pts, submissions, username, etc
    const [thisMatch, setThisMatch] = useState({
        storyHigh: [],
        storyLow: [],
        illustrationHigh: [],
        illutrationLow: [],
        battleInfo: null,
    });
    ////////state setup from point allocation//////
    const [student, setStudent] = useState({
        username: '',
        avatar: '',
        story: {
            page1: '',
            page2: '',
            page3: '',
        },
        storyPoints: 0,
        illustration: '',
        storyOpponent: {
            username: '',
            story: {
                page1: '',
                page2: '',
                page3: '',
            },
            storyPoints: 0,
        },
        illustrationOpponent: {
            avatar: '',
            username: '',
            illustration: '',
            illustrationPoints: 0,
        },
        illustrationPoints: 0,
        storyTotal: 0,
        illustrationTotal: 0,
    });
    console.log('response.battleInfo', response?.battleInfo);
    const [teammate, setTeammate] = useState({
        avatar: '',
        username: '',
        story: {
            page1: '',
            page2: '',
            page3: '',
        },
        storyPoints: 0,
        illustration: '',
        storyOpponent: {
            username: '',
            avatar: '',
            story: {
                page1: '',
                page2: '',
                page3: '',
            },
            storyPoints: 0,
        },
        illustrationOpponent: {
            avatar: '',
            username: '',
            illustration: '',
            illustrationPoints: 0,
        },
        illustrationPoints: 0,
        storyTotal: 0,
        illustrationTotal: 0,
    });
    //student/teammate submissions state
    useEffect(() => {
        if (response?.battleInfo) {
            console.log('VESUS MATCH INFOOOOOOO', response?.battleInfo);
            const { student, teammate } = response?.battleInfo;
            // const { username, story, illustration } = student;
            // const { teammateUsername, teammateStory, teammateIllustration } = teammate;
            setThisMatch({ ...response });
            setStudent({ ...student });
            setTeammate({ ...teammate });
        }
    }, [response]);

    return (
        <Container className={classes.containerStyling}>
            <Grid container>
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
                            <Avatar className={classes.avatarMargin} src={student.avatar}></Avatar>
                            <div className={classes.playerName}>{student.username}</div>
                        </div>
                        <div className={classes.rightPlayer}>
                            <div className={classes.playerName}>
                                {student.storyOpponent.username}
                            </div>
                            <Avatar src={student.storyOpponent.username}></Avatar>
                        </div>
                    </div>
                    <div className={classes.subRow}>
                        {/* High story1 */}
                        <Grid item xs={12} sm={12} md={6}>
                            <SubmissionDisplay
                                key='story1Points'
                                username={student.username}
                                submission={student.story.page1}
                                // points={state.story1Points}
                                points={student.storyPoints}
                                type='Story'
                            />
                        </Grid>
                        <div className={classes.totalScore}>
                            <p>{student.storyTotal}</p> {/* High story1 + high story2 pts */}
                        </div>
                        {/* High story2 */}
                        <Grid item xs={12} sm={12} md={6}>
                            <SubmissionDisplay
                                key='story1Points'
                                // points={state.story1Points}
                                username={student.storyOpponent.username}
                                submission={student.storyOpponent.story.page1}
                                points={student.storyOpponent.storyPoints}
                                type='Story'
                            />
                        </Grid>
                    </div>
                    <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
                </Grid>
                <Grid className={classes.story2}>
                    <div className={classes.nameRow}>
                        <div className={classes.leftPlayer}>
                            <Avatar src={teammate.avatar}></Avatar>
                            <div className={classes.playerName}>{teammate.username}</div>
                        </div>
                        <div className={classes.rightPlayer}>
                            <div className={classes.playerName}>
                                {teammate.storyOpponent.username}
                            </div>
                            <Avatar src={teammate.storyOpponent.avatar}></Avatar>
                        </div>
                    </div>
                    <div className={classes.subRow}>
                        {/* Low story1 */}
                        <Grid item xs={12} sm={12} md={6}>
                            <SubmissionDisplay
                                key='story1Points'
                                username={teammate.username}
                                submission={teammate.story.page1}
                                // points={state.story1Points}
                                points={teammate.storyPoints}
                                type='Story'
                            />
                        </Grid>
                        <div className={classes.totalScore}>
                            <p>{teammate.storyTotal}</p> {/* low story1 + low story2 pts */}
                        </div>
                        {/* Low story2 */}
                        <Grid item xs={12} sm={12} md={6}>
                            <SubmissionDisplay
                                key='story1Points'
                                // points={state.story1Points}
                                username={teammate.storyOpponent.username}
                                submission={teammate.storyOpponent.story.page1}
                                points={teammate.storyOpponent.storyPoints}
                                type='Story'
                            />
                        </Grid>
                    </div>
                    <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
                </Grid>
            </Grid>
            <Grid className={classes.bottomRow}>
                <Grid className={classes.picture1}>
                    <div className={classes.nameRow}>
                        <div className={classes.leftPlayer}>
                            <Avatar src={student.avatar}></Avatar>
                            <div className={classes.playerName}>{student.username}</div>
                        </div>
                        <div className={classes.rightPlayer}>
                            <div className={classes.playerName}>
                                {student.illustrationOpponent.username}
                            </div>
                            <Avatar src={student.illustrationOpponent.avatar}></Avatar>
                        </div>
                    </div>
                    <div className={classes.subRow}>
                        {/* high pic1 */}
                        <Grid item xs={12} sm={12} md={6}>
                            <SubmissionDisplay
                                key='pic1Points'
                                username={student.username}
                                submission={student.illustration}
                                // points={state.story1Points}
                                points={student.illustrationPoints}
                                type='Illustration'
                            />
                        </Grid>
                        {/* <Grid item xs={2}>
                            <div className={classes.backButton}>
                                <Link to={`/child-home`}>
                                    <Button className={classes.orangeButton} type='button'>
                                        Back
                                    </Button>
                                </Link>
                            </div>
                        </Grid> */}
                        <div className={classes.totalScore}>
                            <p>{student.illustrationTotal}</p> {/* High pic1 + high pic2 pts */}
                        </div>
                        {/* high pic2 */}
                        <Grid item xs={12} sm={12} md={6}>
                            <SubmissionDisplay
                                key='pic1Points'
                                // points={state.story1Points}
                                username={student.illustrationOpponent.username}
                                submission={student.illustrationOpponent.illustration}
                                points={student.illustrationOpponent.illustrationPoints}
                                type='Illustration'
                            />
                        </Grid>
                    </div>
                    <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
                </Grid>
                <Grid className={classes.picture2}>
                    <div className={classes.nameRow}>
                        <div className={classes.leftPlayer}>
                            <Avatar src={teammate.avatar}></Avatar>
                            <div className={classes.playerName}>{teammate.username}</div>
                        </div>
                        <div className={classes.rightPlayer}>
                            <div className={classes.playerName}>
                                {teammate.illustrationOpponent.username}
                            </div>
                            <Avatar src={teammate.illustrationOpponent.avatar}></Avatar>
                        </div>
                    </div>
                    <div className={classes.subRow}>
                        {/* Low pic1 */}
                        <Grid item xs={12} sm={12} md={6}>
                            <SubmissionDisplay
                                key='pic1Points'
                                username={teammate.username}
                                submission={teammate.illustration}
                                // points={state.story1Points}
                                points={teammate.illustrationPoints}
                                type='Illustration'
                            />
                        </Grid>
                        <div className={classes.totalScore}>
                            <p>{teammate.illustrationTotal}</p> {/* low pic1 + low pic2 pts */}
                        </div>
                        {/* Low Pic2 */}
                        <Grid item xs={12} sm={12} md={6}>
                            <SubmissionDisplay
                                key='pic1Points'
                                // points={state.story1Points}
                                username={teammate.illustrationOpponent.username}
                                submission={teammate.illustrationOpponent.illustration}
                                points={teammate.illustrationOpponent.illustrationPoints}
                                type='Illustration'
                            />
                        </Grid>
                    </div>
                    <Grid item xs={2}>
                        <div className={classes.voteButton}>
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
            )}
        </Container>
    );
};

export { Versus };
