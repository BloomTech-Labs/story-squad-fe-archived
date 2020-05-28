import React, { useState, useEffect } from 'react';
import 'typeface-nunito';
import ava1 from './img/ava1.png';
import { KidHeader } from '../reusable-components/kid-header/kid-header';
import { Container } from '@material-ui/core';
import { useAPI } from '../../hooks';
import { VersusHeader, VersusRound } from './versusSubComponents';
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
    // console.log(child);
    const [response] = useAPI(`/versusRoutes/versus`, 'GET', false);
    console.log('response', response);
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

    if (matchdata.homeTeam === undefined)
        return <VersusHeader title={'Loading!!'} homeTeam={``} awayTeam={``} />;

    console.log('locked', locked['3Votes']);
    console.log(matchups);
    return (
        <VersusWrapper>
            <Wrapper>
                <KidHeader
                    title={'The Matchup'}
                    subtext={`${matchdata.homeTeam[0].username} & ${matchdata.homeTeam[1].username}! vs ${matchdata.awayTeam[0].username} & ${matchdata.awayTeam[1].username}!`}
                />

                {/* <VersusHeader
                    title={'The MatchUp'}
                  
                    homeTeam={`${matchdata.homeTeam[0].username} & ${matchdata.homeTeam[1].username}!`}
                    awayTeam={`${matchdata.awayTeam[0].username} & ${matchdata.awayTeam[1].username}!`}
                /> */}
                {matchups
                    ? matchups.map((round, index) => {
                          return (
                              <VersusRound
                                  key={index}
                                  index={index + 1}
                                  matchup={round}
                                  child={child}
                                  locked={true}
                              />
                          );
                      })
                    : null}
                <div>
                    <Button>Vote</Button>
                </div>
                {/* <VersusButton locked={locked['3Votes']} /> */}
            </Wrapper>
        </VersusWrapper>
    );
};

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
