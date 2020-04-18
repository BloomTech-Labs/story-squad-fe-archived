import React, { useState, useEffect } from 'react';
import 'typeface-nunito';
import ava1 from './img/ava1.png';
import ava2 from './img/ava2.png';
import ava3 from './img/ava3.png';
import ava4 from './img/ava4.png';
import { Button, Avatar, Container, Grid } from '@material-ui/core';
import { useStyles } from './versus-styles';
import { Child } from '../../models';
import { Link } from 'react-router-dom';
import vsImg from './img/VS.png';
import { SubmissionDisplay } from './modals/subDisplay.component';
import { useAPI } from '../../hooks';
import { VersusHeader } from './versusSubComponents/versusHeader';
interface VersusProps {
    thisBattle?: 0;
}
const Versus: React.FC<VersusProps> = ({ thisBattle }) => {
    const classes = useStyles({});
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
            setThisMatch({ ...response });
            setStudent({ ...student });
            setTeammate({ ...teammate });
        }
    }, [response]);
    console.log(`response`, response?.battleInfo);

    const homeTeamNames = `${student.username} & ${teammate.username}!`;
    const awayTeamNames = `${student.storyOpponent.username} & ${teammate.storyOpponent.username}`;
    return (
        <Container className={classes.containerStyling}>
            <VersusHeader
                homeTeam={`${student.username} & ${teammate.username}!`}
                awayTeam={`${student.storyOpponent.username} & ${teammate.storyOpponent.username}`}
            />
            {/* <VersusRound /> */}
            <Grid className={classes.topRow}>
                {/* STORY 1 AND STORY 2 */}
                <Grid className={classes.story2}>
                    <div className={`${classes.nameRow} ${classes.nameRowSmall}`}>
                        <div className={classes.leftPlayer}>
                            <Avatar className={classes.avatarStyle} src={ava2}></Avatar>
                            <div className={classes.playerName}>{teammate.username}</div>
                        </div>
                        <div className={classes.rightPlayer}>
                            <div className={classes.playerName}>
                                {teammate.storyOpponent.username}
                            </div>
                            <Avatar className={classes.avatarStyle} src={ava4}></Avatar>
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
                        <div className={classes.totalScoreSmall}>
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
                    <div className={`${classes.nameRow} ${classes.nameRowSmall}`}>
                        <div className={classes.leftPlayer}>
                            <Avatar className={classes.avatarStyle} src={ava1}></Avatar>
                            <div className={classes.playerName}>{student.username}</div>
                        </div>
                        <div className={classes.rightPlayer}>
                            <div className={classes.playerName}>
                                {student.illustrationOpponent.username}
                            </div>
                            <Avatar className={classes.avatarStyle} src={ava3}></Avatar>
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
                        <div className={classes.totalScoreSmall}>
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
                    <div className={`${classes.nameRow} ${classes.nameRowBig}`}>
                        <div className={classes.leftPlayer}>
                            <Avatar className={classes.avatarStyle} src={ava2}></Avatar>
                            <div className={classes.playerName}>{teammate.username}</div>
                        </div>
                        <div className={classes.rightPlayer}>
                            <div className={classes.playerName}>
                                {teammate.illustrationOpponent.username}
                            </div>
                            <Avatar className={classes.avatarStyle} src={ava4}></Avatar>
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
                        <div className={classes.totalScoreBig}>
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
                    <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
                </Grid>
                {/*Buttons */}
                <Grid className={classes.btnContainer}>
                    <Grid className={classes.btnDiv}>
                        <Link to={`/kids-dashboard/team-join`}>
                            <Button className={classes.orangeButton} type='button'>
                                Back
                            </Button>
                        </Link>
                        <Link to={`/kids-dashboard/nextpage`}>
                            <Button className={classes.orangeButton} type='submit'>
                                Vote
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export { Versus };
