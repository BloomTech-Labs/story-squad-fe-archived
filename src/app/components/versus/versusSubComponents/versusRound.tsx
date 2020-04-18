import React from 'react';
import { Button, Avatar, Typography, Container, Grid, Modal } from '@material-ui/core';
import { useStyles } from '../versus-styles';

import ava1 from '../img/ava1.png';
import ava2 from '../img/ava2.png';
import ava3 from '../img/ava3.png';
import ava4 from '../img/ava4.png';
import vsImg from '../img/VS.png';

interface RoundProps {
    homeName: string;
    homeAvatar: {};
    submission: {};
    homePoints: number;
    awayName: string;
    awayAvatar: string;
    awaySubmission: {};
    awayPoints: number;
}

const VersusRound: React.FC<RoundProps> = ({
    homeName,
    homeAvatar,
    submission,
    homePoints,
    awayName,
    awayAvatar,
    awaySubmission,
    awayPoints,
}) => {
    const classes = useStyles();
    return (
        <Grid className={classes.story1}>
            <div className={`${classes.nameRow} ${classes.nameRowBig}`}>
                <div className={classes.leftPlayer}>
                    <Avatar className={classes.avatarStyle} src='homeAvatar'></Avatar>
                    <div className={classes.playerName}>{homeName}</div>
                </div>
                <div className={classes.rightPlayer}>
                    <div className={classes.playerName}>{awayName}</div>
                    <Avatar className={classes.avatarStyle} src='awayAvatar'></Avatar>
                </div>
            </div>
            <div className={classes.subRow}>
                {/* High story1 */}
                <Grid item xs={12} sm={12} md={6}>
                    {/* <SubmissionDisplay
                        key='story1Points'
                        username={homeName}
                        submission={homePlayer.player.story.page1}
                        // points={state.story1Points}
                        points={homePlayer.player.storyPoints}
                        type='Story'
                    /> */}
                </Grid>
                <div className={classes.totalScoreBig}>
                    <p>{homePoints}</p> {/* High story1 + high story2 pts */}
                </div>
                {/* High story2 */}
                <Grid item xs={12} sm={12} md={6}>
                    {/* <SubmissionDisplay
                        key='story1Points'
                        // points={state.story1Points}
                        username={student.storyOpponent.username}
                        submission={student.storyOpponent.story.page1}
                        points={student.storyOpponent.storyPoints}
                        type='Story'
                    /> */}
                </Grid>
            </div>
            <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
        </Grid>
    );
};

export { VersusRound };
