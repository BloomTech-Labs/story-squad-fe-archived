import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar, Grid } from '@material-ui/core';
import { SubmissionDisplay } from '../../modals/subDisplay.component';
import { useStyles } from '../../versus-styles';
import { ReactComponent as Lock } from '../../img/lock-icon.svg';

import vsImg from '../../img/VS.svg';
import Badge from '@material-ui/core/Badge';
import { FeedbackPopup } from '../../emoji-feedback/feedback-popup';
import Card from '../../../reusable-components/card/Card';
import Wrapper from '../../../reusable-components/wrapper/Wrapper';
import styled from 'styled-components';

interface RoundProps {
    index: number;
    matchup: any;
    pulseAnim?: boolean;
    child?: any;
    votes?: number;
}

const VersusRound: React.FC<RoundProps> = ({ matchup, child, index, pulseAnim, votes }) => {
    const unlock = 3 - votes < index - 1;
    if (matchup[0].story === undefined && matchup[0].illustration === undefined) return;

    return (
        <>
            {matchup && (
                <Round className={`card${index}`}>
                    <SubmissionDisplay user={matchup[0]} reverse={true} child={child} />
                    <div className='versus__info'>
                        <p>{matchup.points}</p>
                    </div>
                    <SubmissionDisplay user={matchup[1]} child={child} locked={unlock} />
                </Round>
            )}
        </>
    );
};

// background: url(${vsImg}) 0 0 no-repeat;

const Round = styled.div`
    display: grid;
    grid-template-columns: 1fr minmax(80px, 1.5fr) 1fr;
    height: 40%;
    background-image: url(${vsImg});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    padding: 10px;
    position: relative;
    & .versus__info {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        align-item: start;
        & > p {
            height: 30px;
            margin-left: 30px;
            padding: 20px;
        }
    }
`;
export { VersusRound };
