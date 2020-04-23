import React, { useState } from 'react';
import { Avatar, Grid } from '@material-ui/core';
import { SubmissionDisplay } from '../../modals/subDisplay.component';
import { useStyles } from '../../versus-styles';
import vsImg from '../../img/VS.png';
import { ReactComponent as LockIcon } from '../../img/lock-icon.svg';

interface RoundProps {
    roundStyle: {};
    nameRowStyle: {};
    homeName: string;
    homeAvatar: string;
    homeSubmission: any;
    homePoints: number;
    awayName: string;
    awayAvatar: string;
    awaySubmission: any;
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
    const [locked, setLocked] = useState(true);
    const submissionCheck = (submission) =>
        typeof submission === 'string' ? submission : Object.values(submission);
    console.log(`asdasd`, nameRowStyle);
    return !locked ? (
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
                        username={homeName}
                        submission={submissionCheck(homeSubmission)}
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
                        username={awayName}
                        submission={submissionCheck(awaySubmission)}
                    />
                </Grid>
            </div>
            <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
        </Grid>
    ) : (
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
                        username={homeName}
                        submission={submissionCheck(homeSubmission)}
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
                    <LockIcon />
                </Grid>
            </div>
            <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
        </Grid>
    );
};

export { VersusRound };
