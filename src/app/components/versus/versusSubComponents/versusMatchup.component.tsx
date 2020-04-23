import React, { useState } from 'react';
import { ReactComponent as LockedIcon } from '../img/lock-icon.svg';
import { useStyles } from '../versus-styles';
import { SubmissionDisplay } from '../modals/subDisplay.component';
import vsImg from '../img/VS.png';
import ava1 from '../img/ava1.png';
import ava2 from '../img/ava2.png';
import ava3 from '../img/ava3.png';
import ava4 from '../img/ava4.png';
import { Avatar, Typography, Container, Grid } from '@material-ui/core';

interface SubDisplayProps {
    submission: string;
    username: string;
    oppUsername: string;
    type: 'Story' | 'Illustration';
    key: 'story1Points' | 'pic1Points' | 'story2Points' | 'pic2Points';
    points: number;
    storyTotal: number;
    className: string;
}

const VersusMatchup: React.FC<SubDisplayProps> = ({
    key,
    username,
    oppUsername,
    submission,
    points,
    type,
    storyTotal,
    className,
}) => {
    const classes = useStyles({});
    console.log(storyTotal);
    const [isLocked, setLocked] = useState({ lock: true });
    return isLocked.lock ? (
        <>
            <div>
                <div className={classes.leftPlayer}>
                    <Avatar className={classes.avatarStyle} src={ava1}></Avatar>
                    <div className={classes.playerName}>{username}</div>
                </div>
                <div className={classes.rightPlayer}>
                    <div className={classes.playerName}>{oppUsername}</div>
                    <Avatar className={classes.avatarStyle} src={ava3}></Avatar>
                </div>
            </div>
            <div className={classes.subRow}>
                {/* High story1 */}
                <Grid item xs={12} sm={12} md={6}>
                    <SubmissionDisplay
                        key={key}
                        username={username}
                        submission={submission}
                        points={points}
                        type={type}
                    />
                </Grid>
                <div className={classes.totalScoreBig}>
                    <p>{storyTotal}</p> {/* High story1 + high story2 pts */}
                </div>
                {/* High story2 */}
                <Grid item xs={12} sm={12} md={6}>
                    <SubmissionDisplay
                        key={key}
                        username={username}
                        submission={submission}
                        points={points}
                        type={type}
                    />
                </Grid>
            </div>
        </>
    ) : (
        <SubmissionDisplay
            key={key}
            points={points}
            username={username}
            submission={submission}
            type={type}
        />
    );
};

export default VersusMatchup as React.ComponentType<SubDisplayProps>;
