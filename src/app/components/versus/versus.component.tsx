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
import { Child, Illustration, Story } from '../../models';
import requestFactory from '../../util/requestFactory';

class VsResponseMatchdata {
    awayTeam: Child[];
    homeTeam: Child[];
    votes: number;
}

class VsResponseMatchup {
    '0': AnnotatedStory | AnnotatedIllustration;
    '1': AnnotatedStory | AnnotatedIllustration;
    'points': number;
}

class VsResponse {
    matchdata: VsResponseMatchdata;
    matchups: VsResponseMatchup[];
}

interface AnnotatedStory extends Story {
    isLoser: boolean;
    illustration: string;
}

interface AnnotatedIllustration extends Illustration {
    isLoser: boolean;
    illustration: string;
}

interface VersusProps {
    child: string;
}

const Versus: React.FC<VersusProps> = ({ child }) => {
    const classes = useStyles({});
    const [response] = useAPI<VsResponse>(`/versusRoutes/versus`, 'GET', false);
    const [votesCasted, setVotesCasted] = useState(0);
    const [matchdata, setMatchdata] = useState({} as any);
    const [finalResults, setFinalResults] = useState(null);
    const [winningScores, setWinningScores] = useState([]);

    const [matchups, setMatchups] = useState<VsResponseMatchup[]>(null);
    const [locked, setLocked] = useState({
        '1Votes': true,
        '2Votes': true,
        '3Votes': true,
    });

    const axios = requestFactory();

    //student/teammate submissions state
    useEffect(() => {
        console.log('versus Component response', response);
        // This if statement has been changed to include finalResults so that
        // this code will only run when the data for both has been downloaded.
        // This way we can add the isLoser property to the matchups before we set the matchups state.

        if (response) {
            setMatchups(response.matchups);
        }

        if (response && finalResults) {
            setVotesCasted(response.matchdata.votes);
            setMatchdata(response.matchdata);
            console.log('response: ', response);
            console.log('finalResults: ', finalResults);
            // This loop was moved out of the useEffect below so that we can be sure that
            // the response.matchups and the finalResults are both loaded before it runs

            // looping over the results to determine winner and picture/story
            finalResults.forEach((each) => {
                // matching up the matchups with the elements in Build[]
                const isPicture = each.PictureC1points !== undefined;
                const isStory = each.StoryC1points !== undefined;
                response.matchups.forEach((matchup) => {
                    let isPictureMatchup = false;
                    if (matchup[0].illustration !== undefined || null) {
                        isPictureMatchup = true;
                    }
                    // We used these console logs to compare the matchup childIds to the winnerIds
                    // console.log('matchup[0]', matchup[0]);
                    // console.log('comp1', isPicture, isPictureMatchup);
                    // console.log('comp2', matchup[0].childId, each.winnerId);
                    // console.log('comp3', matchup[1].childId, each.winnerId);
                    if (
                        isPicture === true &&
                        isPictureMatchup === true &&
                        (matchup[0].childId === each.winnerId ||
                            matchup[1].childId === each.winnerId)
                    ) {
                        // setting isLoser boolean property on both sides of the matchup, true on children whose id=/=winnerId
                        // console.log('isLoser');
                        matchup[0].isLoser = matchup[0].childId !== each.winnerId;
                        matchup[1].isLoser = matchup[1].childId !== each.winnerId;
                    } else if (
                        isPicture === false &&
                        isPictureMatchup === false &&
                        (matchup[0].childId === each.winnerId ||
                            matchup[1].childId === each.winnerId)
                    ) {
                        matchup[0].isLoser = matchup[0].childId !== each.winnerId;
                        matchup[1].isLoser = matchup[1].childId !== each.winnerId;
                    }
                });
                setMatchups(response.matchups);
            });
        }
    }, [response, finalResults]);

    useEffect(() => {
        axios
            // check if the timer for voting has elapsed
            .get('/finalRoutes/time')
            .then((res) => {
                if (res.data.finalScreen.votingTimeIsOver) {
                    // if it has, then get the results
                    axios
                        .get('/finalRoutes/results')
                        .then(({ data }) => {
                            setFinalResults(data.Build);
                            console.log(data.Build);
                        })
                        .catch((err) => console.log(err));
                } else {
                    // this is to deal with the edge case of the voting time not being up
                    setFinalResults([]);
                }
            })
            .catch((err) => console.log(err));
        // The empty dependency array ensures that this will run once and then will not run again
    }, []);

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

    // console.log(matchups); // point totals from here
    // console.log(child); // currently logged in child

    let homeTeamPoints = 0;
    let awayTeamPoints = 0;

    if (finalResults !== null) {
        finalResults.forEach((result) => {
            if (
                matchdata.homeTeam[0].id == result.winnerId ||
                matchdata.homeTeam[1].id == result.winnerId
            ) {
                homeTeamPoints += result.totalPoints;
            } else {
                awayTeamPoints += result.totalPoints;
            }
        });
    }

    console.log('versus Component matchups', matchups);

    return (
        <Container className={classes.containerStyling}>
            <VersusHeader
                title={'The MatchUp'}
                homeTeam={`${matchdata.homeTeam[0].username} & ${matchdata.homeTeam[1].username}!`}
                awayTeam={`${matchdata.awayTeam[0].username} & ${matchdata.awayTeam[1].username}!`}
                homeTeamPoints={homeTeamPoints}
                awayTeamPoints={awayTeamPoints}
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
