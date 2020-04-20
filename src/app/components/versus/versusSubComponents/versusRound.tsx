import React from 'react';
import { Avatar, Grid } from '@material-ui/core';
import { SubmissionDisplay } from '../modals/subDisplay.component';
import { useStyles } from '../versus-styles';
import vsImg from '../img/VS.png';

interface RoundProps {
    roundStyle: {};
    nameRowStyle: {};
    homeName: string;
    homeAvatar: string;
    homeSubmission: string | {};
    homePoints: number;
    awayName: string;
    awayAvatar: string;
    awaySubmission: string | {};
    awayPoints: number;
}

const VersusRound: React.FC<RoundProps> = ({
    roundStyle,
    nameRowStyle,
    homeName,
    homeAvatar,
    homeSubmission,
    homePoints,
    awayName,
    awayAvatar,
    awaySubmission,
    awayPoints,
}) => {
    const classes = useStyles();
    return (
        <Grid className={`${roundStyle}`}>
            <div className={`${classes.nameRow} ${nameRowStyle}`}>
                <div className={classes.leftPlayer}>
                    <Avatar className={classes.avatarStyle} src={homeAvatar}></Avatar>
                    <div className={classes.playerName}>{homeName}</div>
                </div>
                <div className={classes.rightPlayer}>
                    <div className={classes.playerName}>{awayName}</div>
                    <Avatar className={classes.avatarStyle} src={awayAvatar}></Avatar>
                </div>
            </div>
            <div className={classes.subRow}>
                {/* High story1 */}
                <Grid item xs={12} sm={12} md={6}>
                    <SubmissionDisplay
                        key='story1Points'
                        username={homeName}
                        type={typeof homeSubmission === 'string' ? 'Illustration' : 'Story'}
                        submission={homeSubmission = 'string' | homeSubmission = {}}
                        points={homePoints}
                    />
                </Grid>
                {nameRowStyle === classes.nameRowBig ? (
                    <div className={classes.totalScoreBig}>
                        <p>{homePoints + awayPoints}</p>
                    </div>
                ) : (
                    <div className={classes.totalScoreSmall}>
                        <p>{homePoints + awayPoints}</p>
                    </div>
                )}
                <Grid item xs={12} sm={12} md={6}>
                    <SubmissionDisplay
                        key='story1Points'
                        username={awayName}
                        type={typeof awaySubmission === 'string' ? 'Illustration' : 'Story'}
                        submission={awaySubmission}
                        points={awayPoints}
                    />
                </Grid>
            </div>
            <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
        </Grid>
    );
};

export { VersusRound };
