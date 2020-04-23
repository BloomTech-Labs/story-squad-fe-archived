import React, { useState, useEffect } from 'react';
import 'typeface-nunito';
import ava1 from './img/ava1.png';
import ava2 from './img/ava2.png';
import ava3 from './img/ava3.png';
import ava4 from './img/ava4.png';
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
import VersusMatchup from './versusSubComponents/versusMatchup.component';
import { ReactComponent as LockedIcon } from './img/lock-icon.svg';
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
    const [isLocked, setLocked] = useState({ oneVote: true, twoVotes: false, threeVotes: false });
    const homeTeamNames = `${student.username} & ${teammate.username}!`;
    const awayTeamNames = `${student.storyOpponent.username} & ${teammate.storyOpponent.username}`;

    return (
        <Container className={classes.containerStyling}>
            <VersusHeader homeTeam={homeTeamNames} awayTeam={awayTeamNames} />
            <Grid className={classes.story1}>
                <VersusMatchup
                    className={`${classes.nameRow} ${classes.nameRowBig}`}
                    key='story1Points'
                    username={student.username}
                    oppUsername={student.storyOpponent.username}
                    submission={student.story.page1}
                    points={student.storyPoints}
                    type='Story'
                    storyTotal={student.storyTotal}
                />
                <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
            </Grid>
            <Grid className={classes.story2}>
                <VersusMatchup
                    className={`${classes.nameRow} ${classes.nameRowSmall}`}
                    key='story1Points'
                    username={student.username}
                    oppUsername={student.storyOpponent.username}
                    submission={student.story.page1}
                    points={student.storyPoints}
                    type='Story'
                    storyTotal={student.storyTotal}
                />
                <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
            </Grid>
            <Grid className={classes.bottomRow}>
                <Grid className={classes.picture1}>
                    <VersusMatchup
                        className={`${classes.nameRow} ${classes.nameRowBig}`}
                        key='story1Points'
                        username={student.username}
                        oppUsername={student.storyOpponent.username}
                        submission={student.story.page1}
                        points={student.storyPoints}
                        type='Story'
                        storyTotal={student.storyTotal}
                    />
                    <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
                </Grid>

                <Grid className={classes.picture2}>
                    <VersusMatchup
                        className={`${classes.nameRow} ${classes.nameRowSmall}`}
                        key='story1Points'
                        username={student.username}
                        oppUsername={student.storyOpponent.username}
                        submission={student.story.page1}
                        points={student.storyPoints}
                        type='Story'
                        storyTotal={student.storyTotal}
                    />
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
                        <Link to={`/voting`}>
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
