import React from 'react';
import { Avatar, Grid } from '@material-ui/core';
import { SubmissionDisplay } from '../../modals/subDisplay.component';
import { useStyles } from '../../versus-styles';
import ava1 from '../../img/ava1.png';
import vsImg from '../../img/VS.png';

interface RoundProps {
    roundStyle: {};
    nameRowStyle: {};
    matchup: any;
    matchdata: any;
}

const VersusRound: React.FC<RoundProps> = ({ roundStyle, nameRowStyle, matchup, matchdata }) => {
    const classes = useStyles();

    if (matchup[0].story === undefined && matchup[0].illustration === undefined) return <></>;

    let b64passLeft = '';
    let b64passRight = '';
    if (matchup[0].story !== undefined) {
        b64passLeft = matchup[0].story.page1;
        b64passRight = matchup[1].story.page1;
    } else {
        b64passLeft = matchup[0].illustration;
        b64passRight = matchup[1].illustration;
    }

    console.log('matchup vs round', matchup[0].childId);
    console.log('match data vs round', matchdata.homeTeam[0].id);
    // console.log(b64passLeft);
    // console.log(b64passRight);

    return (
        <Grid className={`${roundStyle}`}>
            <div className={`${classes.nameRow} ${nameRowStyle}`}>
                <div className={classes.leftPlayer}>
                    {/* if match data home team id = matchup child id then render badge */}
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
                    <SubmissionDisplay username={matchup[1].username} submission={b64passRight} />
                </Grid>
            </div>
            <img className={classes.vs} src={vsImg} alt='vs lightning bolt' />
        </Grid>
    );
};

export { VersusRound };
