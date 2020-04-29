import React, { useState, useEffect } from 'react';
import 'typeface-nunito';
import ava1 from './img/ava1.png';
import ava2 from './img/ava2.png';
import ava3 from './img/ava3.png';
import ava4 from './img/ava4.png';
import { Container, Grid } from '@material-ui/core';
import { useStyles } from './versus-styles';
import { useAPI } from '../../hooks';
import { VersusHeader, VersusRound, VersusButton } from './versusSubComponents';

class TemporaryHolder {
    username;
    avatar;
    story;
    storypoints;

    constructor() {
        this.username = '';
        this.avatar = ava1;
        this.story = '';
        this.storypoints = 10;
    }
}

interface VersusProps {
    thisBattle?: 0;
}

const Versus: React.FC<VersusProps> = ({ thisBattle }) => {
    const classes = useStyles({});
    const [response] = useAPI(`/versusRoutes/versus`, 'GET', false);

    const [matchdata, setMatchdata] = useState({} as any);

    const tempHolding = new TemporaryHolder();
    const [matchups, setMatchups] = useState([
        {
            0: tempHolding,
            1: tempHolding,
            points: 0,
        },
        {
            0: tempHolding,
            1: tempHolding,
            points: 0,
        },
        {
            0: tempHolding,
            1: tempHolding,
            points: 0,
        },
        {
            0: tempHolding,
            1: tempHolding,
            points: 0,
        },
    ]);

    //student/teammate submissions state
    useEffect(() => {
        if (response) setMatchdata(response.matchdata);
        if (response) setMatchups(response.matchups);
    }, [response]);

    console.log(matchups);
    console.log(matchdata);

    if (matchdata.homeTeam === undefined)
        return (
            <Container className={classes.containerStyling}>
                <VersusHeader title={'Loading!!'} homeTeam={``} awayTeam={``} />
            </Container>
        );

    const [locked, setLocked] = useState({
        oneVote: false,
        twoVotes: false,
        threeVotes: false,
    });

    return (
        <Container className={classes.containerStyling}>
            <VersusHeader
                title={'The MatchUp'}
                homeTeam={`${matchdata.homeTeam[0].username} & ${matchdata.homeTeam[1].username}!`}
                awayTeam={`${matchdata.awayTeam[0].username} & ${matchdata.awayTeam[1].username}!`}
            />
            <Grid className={classes.topRow}>
                <VersusRound
                    roundStyle={classes.story1}
                    nameRowStyle={classes.nameRowBig}
                    matchup={matchups[0]}
                />
                <VersusRound
                    roundStyle={classes.story2}
                    nameRowStyle={classes.nameRowSmall}
                    matchup={matchups[1]}
                />
            </Grid>
            <Grid className={classes.bottomRow}>
                <VersusRound
                    roundStyle={classes.picture1}
                    nameRowStyle={classes.nameRowSmall}
                    matchup={matchups[2]}
                />
                <VersusRound
                    roundStyle={classes.picture2}
                    nameRowStyle={classes.nameRowBig}
                    matchup={matchups[3]}
                />
                <VersusButton />
            </Grid>
        </Container>
    );
};

export { Versus };
