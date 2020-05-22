import React from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar, Grid } from '@material-ui/core';
import { SubmissionDisplay } from '../../modals/subDisplay.component';
import { useStyles } from '../../versus-styles';
import { ReactComponent as Lock } from '../../img/locked.svg';
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
    const history = useHistory();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    // console.log({ matchup }, { child });
    let emojiArr = [];

    if (matchup[0].emojis && matchup[0].emojis.length > 0) {
        const allEmojis = matchup[0].emojis;
        const emojiId = allEmojis.map(function(o) {
            return o.id;
        });
        const latestFeedback = Math.max(...emojiId);

        const displayedEmojis = allEmojis.filter((emoji) => emoji.id === latestFeedback)[0];

        console.log(latestFeedback);
        console.log(displayedEmojis);
        if (displayedEmojis) emojiArr = displayedEmojis.emoji.replace(/[.{.}."]/g, '').split(',');
        // allEmojis.filter((emoji) => (emoji.id))
    }

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
    console.log(matchup[0].emojis);
    console.log(emojiArr);

    return (
        <Grid className={`${roundStyle}`}>
            <div className={`${classes.nameRow} ${nameRowStyle}`}>
                <div className={classes.leftPlayer}>
                    <FeedbackPopup
                        emojis={emojiArr}
                        open={open}
                        setOpen={setOpen}
                        submission={b64passLeft}
                    />
                    {matchup[0].childId === child.id ? (
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
                <Grid item xs={12} sm={12} md={6}>
                    <SubmissionDisplay
                        username={matchup[0].username}
                        submission={b64passLeft}
                        locked={locked}
                        left={true}
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
                            locked={locked}
                            left={false}
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
                                    className={classes.lock}
                                    onClick={() => history.push(`/voting`)}
                                />
                            </Grid>
                        </Grid>
                    )}
                </Grid>
            </div>
            <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
        </Grid>
    );
};

export { VersusRound };
