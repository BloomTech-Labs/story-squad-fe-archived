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
const StyledContainer = styled.div`
    background-color: red;
`;
const TeamJoin: React.FC<TeamJoinProps> = ({ child, onUpdate }) => {
    const classes = useStyles({});
    const [matchInfo] = useAPI(`/battlesRoutes/battles`, 'GET', false);

    return (
        <Wrapper className={classes.containerStyling}>
            <KidHeader title={'Join The Squad!'} />
            {!matchInfo ? (
                <div>
                    <CircularProgress />
                </div>
            ) : (
                <>
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
                </>
            )}
        </Wrapper>
    );
};
export { TeamJoin };
// `history.push('./points-dashboard')`
