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
import { VersusRound } from './versusSubComponents/versusRound';
import { VersusButton } from './versusSubComponents/versusButton';
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
        avatar: ava1,
        story: {
            page1: '',
            page2: '',
            page3: '',
        },
        storyPoints: 0,
        illustration: '',
        storyOpponent: {
            username: '',
<<<<<<< HEAD
            avatar: '',
=======
            avatar: ava3,
>>>>>>> 77d6c427fc89f5d3440688e32e7c4e559bdbb1b5
            story: {
                page1: '',
                page2: '',
                page3: '',
            },
            storyPoints: 0,
        },
        illustrationOpponent: {
            avatar: ava4,
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
        avatar: ava2,
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
            avatar: ava4,
            story: {
                page1: '',
                page2: '',
                page3: '',
            },
            storyPoints: 0,
        },
        illustrationOpponent: {
            avatar: ava3,
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

    return (
        <Container className={classes.containerStyling}>
            <VersusHeader
                homeTeam={`${student.username} & ${teammate.username}!`}
                awayTeam={`${student.storyOpponent.username} & ${teammate.storyOpponent.username}!`}
            />
            <Grid className={classes.topRow}>
                <VersusRound
                    roundStyle={classes.story1}
                    nameRowStyle={classes.nameRowBig}
                    homeName={student.username}
                    homeAvatar={student.avatar}
                    homeSubmission={student.story}
                    homePoints={student.storyPoints}
                    awayName={student.storyOpponent.username}
                    awayAvatar={student.storyOpponent.avatar}
                    awaySubmission={student.storyOpponent.story}
                    awayPoints={student.storyOpponent.storyPoints}
                />
                <VersusRound
                    roundStyle={classes.story2}
                    nameRowStyle={classes.nameRowSmall}
                    homeName={teammate.username}
                    homeAvatar={teammate.avatar}
                    homeSubmission={teammate.story}
                    homePoints={teammate.storyPoints}
                    awayName={teammate.storyOpponent.username}
                    awayAvatar={teammate.storyOpponent.avatar}
                    awaySubmission={teammate.storyOpponent.story}
                    awayPoints={teammate.storyOpponent.storyPoints}
                />
            </Grid>
            <Grid className={classes.bottomRow}>
                <VersusRound
                    roundStyle={classes.picture1}
                    nameRowStyle={classes.nameRowSmall}
                    homeName={student.username}
                    homeAvatar={student.avatar}
                    homeSubmission={student.illustration}
                    homePoints={student.illustrationPoints}
                    awayName={student.illustrationOpponent.username}
                    awayAvatar={student.illustrationOpponent.avatar}
                    awaySubmission={student.illustrationOpponent.illustration}
                    awayPoints={student.illustrationOpponent.illustrationPoints}
                />
                <VersusRound
                    roundStyle={classes.picture2}
                    nameRowStyle={classes.nameRowBig}
                    homeName={teammate.username}
                    homeAvatar={teammate.avatar}
                    homeSubmission={teammate.illustration}
                    homePoints={teammate.illustrationPoints}
                    awayName={teammate.illustrationOpponent.username}
                    awayAvatar={teammate.illustrationOpponent.avatar}
                    awaySubmission={teammate.illustrationOpponent.illustration}
                    awayPoints={teammate.illustrationOpponent.illustrationPoints}
                />
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
        </Container>
    );
};

export { Versus };
