import React, { useState, useEffect } from 'react';
import 'typeface-nunito';
import ava1 from './img/ava1.png';
import ava2 from './img/ava2.png';
import ava3 from './img/ava3.png';
import ava4 from './img/ava4.png';
import { Container, Grid } from '@material-ui/core';
import { useStyles } from './versus-styles';
import { useAPI } from '../../hooks';
<<<<<<< HEAD
import { VersusHeader } from './versusSubComponents/versusHeader';
=======
import { VersusHeader, VersusRound, VersusButton } from './versusSubComponents';
>>>>>>> 29e5f235ed8276fcde1aeada47020949acf71f0b
interface VersusProps {
    thisBattle?: 0;
}
const Versus: React.FC<VersusProps> = ({ thisBattle }) => {
    const classes = useStyles({});
    const [response] = useAPI(`/versusRoutes/versus`, 'GET', false);
    const [thisMatch, setThisMatch] = useState({
        storyHigh: [],
        storyLow: [],
        illustrationHigh: [],
        illutrationLow: [],
        battleInfo: {},
    });
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
            avatar: ava3,
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
            avatar: ava4,
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
<<<<<<< HEAD
            const { student, teammate } = response?.battleInfo;
=======
>>>>>>> 29e5f235ed8276fcde1aeada47020949acf71f0b
            setThisMatch({ ...response });
            const { student, teammate } = response?.battleInfo;
            setStudent({
                ...student,
                student: { ...student, avatar: ava1 },
                illustrationOpponent: { ...student.illustrationOpponent, avatar: ava3 },
                storyOpponent: { ...student.storyOpponent, avatar: ava3 },
            });
            setTeammate({
                ...teammate,
                teammate: { ...teammate, avatar: ava2 },
                illustrationOpponent: { ...teammate.illustrationOpponent, avatar: ava4 },
                storyOpponent: { ...teammate.storyOpponent, avatar: ava4 },
            });
        }
    }, [response]);
    console.log(`response`, response?.battleInfo);

<<<<<<< HEAD
    const homeTeamNames = `${student.username} & ${teammate.username}!`;
    const awayTeamNames = `${student.storyOpponent.username} & ${teammate.storyOpponent.username}`;
    return (
        <Container className={classes.containerStyling}>
            <VersusHeader homeTeam={homeTeamNames} awayTeam={awayTeamNames} />
=======
    return (
        <Container className={classes.containerStyling}>
            <VersusHeader
                homeTeam={`${student.username} & ${teammate.username}!`}
                awayTeam={`${student.storyOpponent.username} & ${teammate.storyOpponent.username}!`}
            />
>>>>>>> 29e5f235ed8276fcde1aeada47020949acf71f0b
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
                <VersusButton />
            </Grid>
        </Container>
    );
};

export { Versus };
