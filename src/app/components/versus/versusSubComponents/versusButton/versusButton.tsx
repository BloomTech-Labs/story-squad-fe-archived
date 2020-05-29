import React from 'react';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStyles } from './versus-button-styles';
import Button from '../../../reusable-components/button/Button';
import styled from 'styled-components';

interface LockedState {
    locked: boolean;
}

const BtnContainer = styled.section`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 10px;
    border: 3px solid black;
    border-top: none;
    background: linear-gradient(
        90deg,
        var(--gold) 0%,
        var(--gold) 39.75%,
        black 39.75%,
        black 40.15%,
        var(--blue) 40.19%,
        var(--blue) 100%
    );
    @media only screen and (max-width: 800px) {
        background: var(--blue);
    }
`;

const VersusButton: React.FC<LockedState> = ({ locked }) => {
    const history = useHistory();
    const classes = useStyles({});
    return (
        <>
            <BtnContainer>
                <Button click='/kids-dashboard/team-join'>Back</Button>
                {locked === true ? (
                    <Button click='/voting'>Vote</Button>
                ) : (
                    <Button click='/waiting-page'>Next</Button>
                )}
            </BtnContainer>
        </>
    );
};

export { VersusButton };
