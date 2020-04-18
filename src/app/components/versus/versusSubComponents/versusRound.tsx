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
import { useStyles } from '../versus-styles';

interface RoundProps {
    homePlayer: {};
    homeName: string;
    awayPlayer: {};
}

const VersusRound: React.FC<RoundProps> = ({ homePlayer, awayPlayer }) => {
    const classes = useStyles();
    return (
        <Grid className={classes.story1}>
            <div className={`${classes.nameRow} ${classes.nameRowBig}`}>
                <div className={classes.leftPlayer}>
                    <Avatar
                        className={classes.avatarStyle}
                        src={homeplayer.player.avatar | awayPlayer.player.avatar}></Avatar>
                    <div className={classes.playerName}>{student.username}</div>
                </div>
                <div className={classes.rightPlayer}>
                    <div className={classes.playerName}>{student.storyOpponent.username}</div>
                    <Avatar className={classes.avatarStyle} src={ava}></Avatar>
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
                    <p>{student.storyTotal}</p> {/* High story1 + high story2 pts */}
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
