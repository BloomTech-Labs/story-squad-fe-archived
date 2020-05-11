import React from 'react';
import { Avatar, Grid } from '@material-ui/core';
import { SubmissionDisplay } from '../../modals/subDisplay.component';
import { useStyles } from '../../versus-styles';
import { ReactComponent as Lock } from '../../img/lock-icon.svg';
import ava1 from '../../img/ava1.png';
import vsImg from '../../img/VS.png';
import Badge from '@material-ui/core/Badge';
import { FeedbackPopup } from '../../emoji-feedback/feedback-popup';

interface RoundProps {
    roundStyle: {};
    nameRowStyle: {};
    matchup: any;
    child: any;
    locked: boolean;
}

const VersusRound: React.FC<RoundProps> = ({
    roundStyle,
    nameRowStyle,
    matchup,
    child,
    locked,
}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    // console.log({ matchup }, { child });
    if (matchup[0].story === undefined && matchup[0].illustration === undefined) return <></>;

    let b64passLeft = [];
    let b64passRight = [];
    if (matchup[0].story !== undefined) {
        b64passLeft = Object.values(matchup[0].story);
        b64passRight = Object.values(matchup[1].story);
    } else {
        b64passLeft = [matchup[0].illustration];
        b64passRight = [matchup[1].illustration];
    }
    console.log(b64passLeft, b64passRight);
    return (
        <Grid className={`${roundStyle}`}>
            <div className={`${classes.nameRow} ${nameRowStyle}`}>
                <div className={classes.leftPlayer}>
                    <FeedbackPopup open={open} setOpen={setOpen} />
                    {matchup[0].childId === child.id ? (
                        <Badge
                            onClick={() => {
                                setOpen(true);
                            }}
                            className={classes.root}
                            color='error'
                            badgeContent={1}
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
                <Grid item xs={12} sm={12} md={6}>
                    <SubmissionDisplay username={matchup[0].username} submission={b64passLeft} />
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
                        />
                    ) : (
                        <Grid item md>
                            <SubmissionDisplay
                                username={matchup[1].username}
                                submission={b64passRight}
                            />
                            <Lock className={classes.lock} />
                        </Grid>
                    )}
                </Grid>
            </div>
            <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
        </Grid>
    );
};

export { VersusRound };
