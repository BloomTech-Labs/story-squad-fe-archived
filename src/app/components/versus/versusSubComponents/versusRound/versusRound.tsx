import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar, Grid } from '@material-ui/core';
import { SubmissionDisplay } from '../../modals/subDisplay.component';
import { useStyles } from '../../versus-styles';
import { ReactComponent as Lock } from '../../img/lock-icon.svg';
import ava1 from '../../img/ava1.png';
import vsImg from '../../img/VSBolt.svg';
import Badge from '@material-ui/core/Badge';
import { FeedbackPopup } from '../../emoji-feedback/feedback-popup';

interface RoundProps {
    roundStyle: {};
    nameRowStyle: {};
    matchup: any;
    child: any;
    locked: boolean;
    alwaysLocked: boolean;
    pulseAnim: boolean;
}

const VersusRound: React.FC<RoundProps> = ({
    roundStyle,
    nameRowStyle,
    matchup,
    child,
    locked,
    alwaysLocked,
    pulseAnim,
}) => {
    const history = useHistory();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    let emojiArr = [];

    if (matchup[0].emojis && matchup[0].emojis.length > 0) {
        const allEmojis = matchup[0].emojis;
        const emojiId = allEmojis.map(function(o) {
            return o.id;
        });
        const latestFeedback = Math.max(...emojiId);

        const displayedEmojis = allEmojis.filter((emoji) => emoji.id === latestFeedback)[0];

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

    return (
        <Grid className={`${roundStyle}`}>
            {/* 

            column 1           |    column 2
            Child 1 avatar     | Child 2 avatar
            Child 1 submission | Child 2 submission

            
            lightning bolt
            score

            */}
            {/* Below, we are setting the loss class on children whose isLoser property is true */}
            <div
                className={`${classes.leftPlayer} ${nameRowStyle} ${
                    matchup[0].isLoser ? classes.loss : ''
                }`}>
                {/* left child left column */}
                <div className={classes.leftHero}>
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
                            className={classes.badge}
                            color='error'
                            badgeContent={matchup[0].emojis && matchup[0].emojis.length}
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

                {/* left child's submission */}
                <div className={'classes.imageHolder'}>
                    <SubmissionDisplay
                        username={matchup[0].username}
                        submission={b64passLeft}
                        left={true}
                        pulseAnim={false}
                    />
                </div>
            </div>

            <div style={{ width: '0px', height: '100%' }} className='{classes.vs}'>
                <img className={classes.lightningboi} src={vsImg} alt='vs lightning bolt' />
                {/* points */}
                <p className={classes.totalScore}>{matchup.points}</p>
            </div>

            {/* right column */}
            <div className={`${classes.rightPlayer} ${matchup[1].isLoser ? classes.loss : ''}`}>
                <div className={classes.rightHero}>
                    <div className={classes.playerNameRight}>{matchup[1].username}</div>
                    <Avatar className={classes.avatarStyle} src={ava1}></Avatar>
                </div>
                <div className={'classes.imageHolder'}>
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
                                {/* The following div is set to a height of 0 so that we can overlay the lock svg image on top */}
                                <div style={{ height: '0px' }}>
                                    <img
                                        style={{ cursor: 'auto' }}
                                        src={b64passRight[0]}
                                        className={classes.imagePreview}
                                        alt='locked submission'
                                    />
                                </div>
                                <Lock
                                    className={
                                        // Using an interpolated string lets us apply multiple classes to the lock svg. This way we can always have the lock class applied and the lockKey class just applies the cursor change.  https://stackoverflow.com/questions/46066675/how-to-add-multiple-classes-in-material-ui-using-the-classes-props

                                        alwaysLocked
                                            ? classes.lock
                                            : `${classes.lockKey} ${classes.lock}`
                                    }
                                    onClick={alwaysLocked ? null : () => history.push(`/voting`)}
                                />
                            </Grid>
                        </Grid>
                    )}
                </div>
            </div>
        </Grid>
    );
};

export { VersusRound };
