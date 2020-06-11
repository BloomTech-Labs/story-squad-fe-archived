import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'typeface-nunito';
import ava1 from './img/ava1.png';
import ava2 from './img/ava2.png';
import ava3 from './img/ava3.png';
import ava4 from './img/ava4.png';
import { Container, Grid } from '@material-ui/core';
import { useStyles } from './versus-styles';
import { useAPI } from '../../hooks';
import { VersusHeader, VersusRound, VersusButton } from './versusSubComponents';

import requestFactory from '../../util/requestFactory';

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
    child: string;
}

const Versus: React.FC<VersusProps> = ({ child }) => {
    const classes = useStyles({});
    const [response] = useAPI(`/versusRoutes/versus`, 'GET', false);
    const [votesCasted, setVotesCasted] = useState(0);
    const [matchdata, setMatchdata] = useState({} as any);
    const [temp, setTemp] = useState([]);
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
    const [locked, setLocked] = useState({
        '1Votes': true,
        '2Votes': true,
        '3Votes': true,
    });
    const axios = requestFactory();

    useEffect(() => {
        axios
            // check if the timer for voting has elapsed
            .get('/finalRoutes/time')
            .then((res) => {
                if (res.data.finalScreen.votingTimeIsOver) {
                    // if it has, then get the results
                    axios.get('/finalRoutes/results').then(({ data }) => {
                        data.Build.map((each) => {
                            if (each.PictureC1points) {
                                console.log('picture');
                                console.log(each.winnerId);
                            } else {
                                console.log('story');
                                console.log(each.winnerId);
                            }
                        });
                    });
                }
            })
            .catch((err) => console.log(err));
    }, []);

    //student/teammate submissions state
    useEffect(() => {
        // setVotesCasted(1);
        console.log(response);
        if (response) setVotesCasted(response.matchdata.votes);
        if (response) setMatchdata(response.matchdata);
        if (response) setMatchups(response.matchups);
    }, [response]);

    useEffect(() => {
        if (votesCasted === 1) setLocked({ ...locked, '1Votes': false });
        if (votesCasted === 2) setLocked({ ...locked, '1Votes': false, '2Votes': false });
        if (votesCasted === 3)
            setLocked({ ...locked, '1Votes': false, '2Votes': false, '3Votes': false });
        // eslint-disable-next-line
    }, [votesCasted]);

    if (matchdata.homeTeam === undefined)
        return (
            <Container className={classes.containerStyling}>
                <VersusHeader title={'Loading!!'} homeTeam={``} awayTeam={``} />
            </Container>
        );

    // console.log('locked', locked['3Votes']);
    // console.log(matchups); // point totals from here
    // console.log(child); // currently logged in child
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
                    child={child}
                    locked={true}
                    alwaysLocked={true}
                    pulseAnim={false}
                />
                <VersusRound
                    roundStyle={classes.story2}
                    nameRowStyle={classes.nameRowSmall}
                    matchup={matchups[1]}
                    child={child}
                    locked={locked['3Votes']}
                    alwaysLocked={false}
                    pulseAnim={!locked['3Votes']}
                />
            </Grid>
            <Grid className={classes.bottomRow}>
                <VersusRound
                    roundStyle={classes.picture1}
                    nameRowStyle={classes.nameRowSmall}
                    matchup={matchups[2]}
                    child={child}
                    locked={locked['2Votes']}
                    alwaysLocked={false}
                    pulseAnim={
                        locked['2Votes'] === false && locked['3Votes'] === true ? true : false
                    }
                />
                <VersusRound
                    roundStyle={classes.picture2}
                    nameRowStyle={classes.nameRowBig}
                    matchup={matchups[3]}
                    child={child}
                    locked={locked['1Votes']}
                    alwaysLocked={false}
                    pulseAnim={
                        locked['1Votes'] === false && locked['2Votes'] === true ? true : false
                    }
                />
            </Grid>

            <VersusButton locked={locked['3Votes']} />
        </Container>
    );
};

export { Versus };
