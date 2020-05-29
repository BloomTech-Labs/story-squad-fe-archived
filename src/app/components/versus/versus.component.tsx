import React, { useState, useEffect } from 'react';
import 'typeface-nunito';
import ava1 from './img/ava1.png';
import { KidHeader } from '../reusable-components/kid-header/kid-header';
import { useAPI } from '../../hooks';
import { VersusHeader, VersusRound, VersusButton } from './versusSubComponents';
import styled from 'styled-components';
import Wrapper from '../reusable-components/wrapper/Wrapper';
import Button from '../reusable-components/button/Button';

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
    child: any;
}
const Versus: React.FC<VersusProps> = ({ child }) => {
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
    //student/teammate submissions state
    useEffect(() => {
        // setVotesCasted(1);
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

    if (matchdata.homeTeam === undefined) return <KidHeader title={'Loading!!'} />;

    // console.log('locked', locked['3Votes']);
    // console.log(matchups);
    console.log(locked);
    return (
        <VersusWrapper>
            <Wrapper>
                <KidHeader
                    title={'The Matchup'}
                    subtext={`${matchdata.homeTeam[0].username} & ${matchdata.homeTeam[1].username}! VS ${matchdata.awayTeam[0].username} & ${matchdata.awayTeam[1].username}!`}
                />

                {/* <VersusHeader
                    title={'The MatchUp'}
                  
                    homeTeam={`${matchdata.homeTeam[0].username} & ${matchdata.homeTeam[1].username}!`}
                    awayTeam={`${matchdata.awayTeam[0].username} & ${matchdata.awayTeam[1].username}!`}
                /> */}
                {Boolean(matchups) &&
                    matchups.map((round, index) => {
                        return (
                            <VersusRound
                                key={index}
                                index={index + 1}
                                matchup={round}
                                child={child}
                                locked={true}
                                votes={votesCasted}
                            />
                        );
                    })}

                {/* <VersusButton locked={locked['3Votes']} /> */}
                <VersusButton locked={votesCasted < 3} />
            </Wrapper>
        </VersusWrapper>
    );
};
// =======
//         <Container className={classes.containerStyling}>
//             <VersusHeader
//                 title={'The MatchUp'}
//                 homeTeam={`${matchdata.homeTeam[0].username} & ${matchdata.homeTeam[1].username}!`}
//                 awayTeam={`${matchdata.awayTeam[0].username} & ${matchdata.awayTeam[1].username}!`}
//             />
//             <Grid className={classes.topRow}>
//                 <VersusRound
//                     roundStyle={classes.story1}
//                     nameRowStyle={classes.nameRowBig}
//                     matchup={matchups[0]}
//                     child={child}
//                     locked={true}
//                     alwaysLocked={true}
//                     pulseAnim={false}
//                 />
//                 <VersusRound
//                     roundStyle={classes.story2}
//                     nameRowStyle={classes.nameRowSmall}
//                     matchup={matchups[1]}
//                     child={child}
//                     locked={locked['3Votes']}
//                     alwaysLocked={false}
//                     pulseAnim={!locked['3Votes']}
//                 />
//             </Grid>
//             <Grid className={classes.bottomRow}>
//                 <VersusRound
//                     roundStyle={classes.picture1}
//                     nameRowStyle={classes.nameRowSmall}
//                     matchup={matchups[2]}
//                     child={child}
//                     locked={locked['2Votes']}
//                     alwaysLocked={false}
//                     pulseAnim={
//                         locked['2Votes'] === false && locked['3Votes'] === true ? true : false
//                     }
//                 />
//                 <VersusRound
//                     roundStyle={classes.picture2}
//                     nameRowStyle={classes.nameRowBig}
//                     matchup={matchups[3]}
//                     child={child}
//                     locked={locked['1Votes']}
//                     alwaysLocked={false}
//                     pulseAnim={
//                         locked['1Votes'] === false && locked['2Votes'] === true ? true : false
//                     }
//                 />
//                 <VersusButton locked={locked['3Votes']} />
//             </Grid>
//         </Container>
// >>>>>>> ba022fc4803a32e50c6010358d3bb7fa4642c23c
//     );
// };

export { Versus };

const VersusWrapper = styled.div`
    & .card1 {
        background-color: var(--green);
    }
    & .card2 {
        background-color: var(--red);
    }
    & .card3 {
        background-color: var(--gold);
    }
    & .card4 {
        background-color: var(--blue);
    }
    @media only screen and (min-width: 850px) {
        .card1,
        .card4 {
            --width: 6;
        }
        .card2,
        .card3 {
            --width: 4;
        }
    }
`;
