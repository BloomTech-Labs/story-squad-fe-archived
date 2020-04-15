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
    const [battle] = useAPI(`/versusRoutes/versus`, 'GET', false);
    const [state, setState] = useState();

    useEffect(() => {
        if (!battle || battle === undefined) {
            console.log(`BATTLE UNDEFINED`);
            setState({ ...battle });
            console.log(`BATTLE UNDEFINED`, state);
        } else {
            // const { storyHigh, storyLow, illustrationHigh, illustrationLow } = battle;
            // return { storyHigh, storyLow, illustrationHigh, illustrationLow };
            console.log(`STATE SET`, battle.storyHigh);
            return battle;
        }
    }, [battle]);
    // console.log(`storyHigh`, state.storyHigh);
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
            {/* )} */}
            <Grid className={classes.topRow}>
                <Grid className={classes.story1}>
                    <div className={classes.nameRow}>
                        <div className={classes.leftPlayer}>
                            <Avatar className={classes.avatarMargin} src={ava1}></Avatar>
                            <div className={classes.playerName}>PLACEHOLDER</div>
                        </div>
                        <div className={classes.rightPlayer}>
                            <div className={classes.playerName}>Name2</div>
                            <Avatar src={ava2}></Avatar>
                        </div>
                    </div>
                    <div className={classes.subRow}>
                        {/* High story1 */}
                        <Grid item xs={12} sm={12} md={6}>
                            <SubmissionDisplay
                                key='story1Points'
                                username='{PLACEHOLDER}'
                                submission='PLACEHOLDER'
                                type='Story'
                                points={0}
                            />
                        </Grid>
                        <div className={classes.totalScore}>
                            <p>asdsd</p>
                        </div>
                        {/* High story2 */}
                        <Grid item xs={12} sm={12} md={6}>
                            <SubmissionDisplay
                                key='story1Points'
                                // points={state.story1Points}
                                username={'name2'}
                                submission={story2}
                                points={0}
                                type='Story'
                            />
                        </Grid>
                    </div>
                    <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
                </Grid>
                <Grid className={classes.story2}>
                    <div className={classes.nameRow}>
                        <div className={classes.leftPlayer}>
                            <Avatar src={ava1}></Avatar>
                            <div className={classes.playerName}>PLACEHOLDER</div>
                        </div>
                        <div className={classes.rightPlayer}>
                            <div className={classes.playerName}>Name4</div>
                            <Avatar src={ava2}></Avatar>
                        </div>
                    </div>
                    <div className={classes.subRow}>
                        {/* Low story1 */}
                        <Grid item xs={12} sm={12} md={6}>
                            <SubmissionDisplay
                                key='story2Points'
                                username={'PLACEHOLDER'}
                                submission={'PLACEHOLDER'}
                                points={0}
                                type='Story'
                            />
                        </Grid>
                        <div className={classes.totalScore}>
                            <p>Total</p> {/* low story1 + low story2 pts */}
                        </div>
                        {/* Low story2 */}
                        <Grid item xs={12} sm={12} md={6}>
                            <SubmissionDisplay
                                key='story1Points'
                                points={0}
                                username={'name4'}
                                submission={'PLACEHOLDER'}
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
                            <Avatar src={ava1}></Avatar>
                            <div className={classes.playerName}>PLACEHOLDER</div>
                        </div>
                        <div className={classes.rightPlayer}>
                            <div className={classes.playerName}>Name4</div>
                            <Avatar src={ava2}></Avatar>
                        </div>
                    </div>
                    <div className={classes.subRow}>
                        {/* high pic1 */}
                        <Grid item xs={12} sm={12} md={6}>
                            <SubmissionDisplay
                                key='pic1Points'
                                username={'PLACEHOLDER'}
                                submission={'PLACEHOLDER'}
                                points={0}
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
                            <p>Total</p> {/* High pic1 + high pic2 pts */}
                        </div>
                        {/* high pic2 */}
                        <Grid item xs={12} sm={12} md={6}>
                            <SubmissionDisplay
                                key='pic1Points'
                                // points={state.story1Points}
                                username={'name4'}
                                submission={'PLACEHOLDER'}
                                type='Illustration'
                                points={0}
                            />
                        </Grid>
                    </div>
                    <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
                </Grid>
                <Grid className={classes.picture2}>
                    <div className={classes.nameRow}>
                        <div className={classes.leftPlayer}>
                            <Avatar src={ava1}></Avatar>
                            <div className={classes.playerName}>{'placeholder'}</div>
                        </div>
                        <div className={classes.rightPlayer}>
                            <div className={classes.playerName}>Name2</div>
                            <Avatar src={ava2}></Avatar>
                        </div>
                    </div>
                    <div className={classes.subRow}>
                        {/* Low pic1 */}
                        <Grid item xs={12} sm={12} md={6}>
                            <SubmissionDisplay
                                key='pic1Points'
                                username={'USER NAME PLACEHOLDER'}
                                submission={'SUBMISSION PLACEHOLDER'}
                                points={0}
                                type='Illustration'
                            />
                        </Grid>
                        <div className={classes.totalScore}>
                            <p>Total</p> {/* low pic1 + low pic2 pts */}
                        </div>
                        {/* Low Pic2 */}
                        <Grid item xs={12} sm={12} md={6}>
                            <SubmissionDisplay
                                key='pic1Points'
                                points={0}
                                username={'name2'}
                                submission={'PLACEHOLDER'}
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
            {/* )} */}
        </Container>
    );
};

export { Versus };
