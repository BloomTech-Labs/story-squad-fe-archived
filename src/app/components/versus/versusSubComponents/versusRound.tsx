import React from 'react';
import {
    Button,
    Avatar,
    Typography,
    Container,
    Grid,
    Modal,
    Fade,
    Backdrop,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    CircularProgress,
    Card,
    Checkbox,
    Paper,
    Popper,
    MenuItem,
    MenuList,
    Grow,
    ClickAwayListener,
} from '@material-ui/core';
import { SubmissionDisplay } from '../modals/subDisplay.component';
import vsImg from '../img/VS.png';
import { useStyles } from '../versus-styles';

interface RoundProps {
    roundStyle: {};
    nameRowStyle: {};
    homeName: string;
    homeAvatar: {};
    homeSubmission: {};
    homePoints: number;
    awayName: string;
    awayAvatar: {};
    awaySubmission: {};
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
                    <Avatar className={classes.avatarStyle} src={'homeAvatar'}></Avatar>
                    <div className={classes.playerName}>{homeName}</div>
                </div>
                <div className={classes.rightPlayer}>
                    <div className={classes.playerName}>{awayName}</div>
                    <Avatar className={classes.avatarStyle} src={'awayAvatar'}></Avatar>
                </div>
            </div>
            <div className={classes.subRow}>
                {/* High story1 */}
                <Grid item xs={12} sm={12} md={6}>
                    <SubmissionDisplay
                        key='story1Points'
                        username={homeName}
                        submission={'homeSubmission'}
                        points={homePoints}
                        type='Story'
                    />
                </Grid>
                <div className={classes.totalScoreBig}>
                    <p>{homePoints + awayPoints}</p> {/* High story1 + high story2 pts */}
                </div>
                {/* High story2 */}
                <Grid item xs={12} sm={12} md={6}>
                    <SubmissionDisplay
                        key='story1Points'
                        username={awayName}
                        submission={'awaySubmission'}
                        points={awayPoints}
                        type='Story'
                    />
                </Grid>
            </div>
            <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
        </Grid>
    );
};

export { VersusRound };
