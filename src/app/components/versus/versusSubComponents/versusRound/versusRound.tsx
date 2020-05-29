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
    roundStyle?: any;
    nameRowStyle?: any;
    alwaysLocked?: boolean;
    pulseAnim?: boolean;
    child?: any;
    locked?: boolean;
    votes?: number;
}

const VersusRound: React.FC<RoundProps> = ({
    roundStyle,
    nameRowStyle,
    matchup,
    child,
    locked,
    index,
    alwaysLocked,
    pulseAnim,
    votes,
}) => {
    const unlock = 3 - votes < index - 1;
    console.log({ unlock }, 3 - votes, index - 1);

    let b64passLeft = [];
    let b64passRight = [];
    if (matchup[0].story !== undefined) {
        b64passLeft = Object.values(matchup[0].story);
        b64passRight = Object.values(matchup[1].story);
    } else {
        b64passLeft = [matchup[0].illustration];
        b64passRight = [matchup[1].illustration];
    }
    // console.log(matchup[0].emojis);
    // console.log(emojiArr);
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
                    {/* {!unlock && (
                        <Lock
                        // className={alwaysLocked ? classes.lock : classes.lockKey}
                        // onClick={alwaysLocked ? null : () => history.push(`/voting`)}
                        />
                    )} */}
                </Round>
            )}
            {/* {nameRowStyle === classes.nameRowBig ? (
            ) : (
                <div className={classes.totalScoreSmall}>
                    <p>{matchup.points}</p>
                </div>
            )} */}
            {/* {!locked ? (
            ) : (
                <Grid container className={classes.gridContainer}>
                    <Grid item md>
                        <img
                            style={{ cursor: 'auto' }}
                            src={b64passRight[0]}
                            className={classes.imagePreview}
                            alt='locked submission'
                        />
                        <Lock className={classes.lock} />
                    </Grid>
        <Grid className={`${roundStyle}`}>
            <div className={`${classes.nameRow} ${nameRowStyle}`}>
                <div className={classes.leftPlayer}>
                    <FeedbackPopup
                        emojis={emojiArr}
                        open={open}
                        setOpen={setOpen}
                        submission={b64passLeft}
                    />
                    {matchup.childId === child.id ? (
                        <Badge
                            onClick={() => {
                                setOpen(true);
                            }}
                            className={classes.root}
                            color='error'
                            badgeContent={matchup[0].emojis.length}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}>
                            <></>
                        </Badge>
                    ) : null}
                    <Avatar className={classes.avatarStyle} src={ava1}></Avatar>
                    <div className={classes.playerName}>{matchup[0].username}</div>
                </div>
                <div className={classes.rightPlayer}>
                    <div className={classes.playerName}>{matchup[1].username}</div>
                    <Avatar className={classes.avatarStyle} src={ava1}></Avatar>
                </div>
            </div>
            <div className={classes.subRow}>
                {/* High story1 */}
            {/* <Grid item xs={12} sm={12} md={6}>
                    <SubmissionDisplay
                        username={matchup[0].username}
                        submission={b64passLeft}
                        left={true}
                        pulseAnim={false}
                    />
                </Grid>
                {nameRowStyle === classes.nameRowBig ? (
                    <div className={classes.totalScoreBig}>
                        <p>{matchup.points}</p>
                    </div>
                ) : (
                    <div className={classes.totalScoreSmall}>
                        <p>{matchup.points}</p>
                    </div>
                )}
                <Grid item xs={12} sm={12} md={6}>
                    {!locked ? (
                        <SubmissionDisplay
                            username={matchup[1].username}
                            submission={b64passRight}
                            left={false}
                            pulseAnim={pulseAnim}
                        />
                    ) : (
                        <Grid container className={classes.gridContainer}>
                            <Grid item md>
                                <img
                                    style={{ cursor: 'auto' }}
                                    src={b64passRight[0]}
                                    className={classes.imagePreview}
                                    alt='locked submission'
                                />
                                <Lock
                                    className={alwaysLocked ? classes.lock : classes.lockKey}
                                    onClick={alwaysLocked ? null : () => history.push(`/voting`)}
                                />
                            </Grid>
                        </Grid>
                    )}
>>>>>>> ba022fc4803a32e50c6010358d3bb7fa4642c23c
                </Grid> */}
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
    @media only screen and (max-width: 800px) {
        background-image: none;
    }
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
