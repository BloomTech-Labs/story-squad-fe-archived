import React from 'react';
import { Container, CircularProgress } from '@material-ui/core';
import { useAPI } from '../../../hooks';
import { Child } from '../../../models';
import { KidHeader } from '../../reusable-components/';
import { TeamPlayer } from './team-player';
import avatar1 from '../../point-allocation-dashboard/img/cam.png';
import avatar2 from '../../point-allocation-dashboard/img/Hero13.png';
import { useStyles } from './team-join-styles';
import Wrapper from '../../reusable-components/wrapper/Wrapper';
import Button from '../../reusable-components/button/Button';
import styled from 'styled-components';

interface TeamJoinProps {
    onUpdate?: () => void;
    child: Child;
}

const TeamJoin: React.FC<TeamJoinProps> = ({ child, onUpdate }) => {
    const classes = useStyles({});
    const [matchInfo] = useAPI(`/battlesRoutes/battles`, 'GET', false);

    return (
        <>
            {!matchInfo ? (
                <div>
                    <CircularProgress />
                </div>
            ) : (
                <Wrapper className={classes.containerStyling}>
                    <KidHeader title={'Join The Squad!'} />

                    <TeamPlayer
                        username={matchInfo.thisMatch.team.student.username}
                        ava={avatar1}
                        playerStyles={classes.player}
                    />
                    <TeamPlayer
                        username={matchInfo.thisMatch.team.teammate.username}
                        ava={avatar2}
                        playerStyles={classes.teammate}
                    />
                    <StyledContainer>
                        <Button click='./points-dashboard'>Next</Button>
                    </StyledContainer>
                </Wrapper>
            )}
        </>
    );
};
export { TeamJoin };
// `history.push('./points-dashboard')`
const StyledContainer = styled.section`
    width: 100vw;
    display: flex;
    align-items: center;
    padding-right: 2%;
    border-left: 3px solid #292929;
    border-right: 3px solid #292929;
    border-bottom: 3px solid #292929;
    justify-content: flex-end;
    background-color: var(--gold);

    @media only screen and (min-width: 1000px) {
        background-color: red;
        background: linear-gradient(
            90deg,
            var(--green) 0%,
            var(--green) 49.8%,
            black 49.8%,
            black 50.2%,
            var(--gold) 50.2%,
            var(--gold) 100%
        );
    }
`;
