import React from 'react';
import { Avatar, Grid } from '@material-ui/core';
import { SubmissionDisplay } from '../../modals/subDisplay.component';
import { useStyles } from '../../versus-styles';
import { ReactComponent as Lock } from '../../img/lock-icon.svg';

import vsImg from '../../img/VS.svg';
import Badge from '@material-ui/core/Badge';
import { FeedbackPopup } from '../../emoji-feedback/feedback-popup';
import Card from '../../../reusable-components/card/Card';
import Wrapper from '../../../reusable-components/wrapper/Wrapper';
import styled from 'styled-components';

interface RoundProps {
    index: number;
    matchup: any;
    child?: any;
    locked?: boolean;
}

const VersusRound: React.FC<RoundProps> = ({ matchup, child, locked, index }) => {
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
        <>
            {matchup && (
                <Round className={`card${index}`}>
                    <SubmissionDisplay user={matchup[0]} reverse={true} />
                    <div className='versus__info'>
                        <p>{matchup.points}</p>
                    </div>
                    <SubmissionDisplay user={matchup[1]} />
                </Round>
            )}
            {/* {nameRowStyle === classes.nameRowBig ? (
            ) : (
                <div className={classes.totalScoreSmall}>
                    <p>{matchup.points}</p>
                </div>
            )} */}

            {/* {!locked ? (
            ) : (
                <Grid container className={classes.gridContainer}>
                    <Grid item md>
                        <img
                            style={{ cursor: 'auto' }}
                            src={b64passRight[0]}
                            className={classes.imagePreview}
                            alt='locked submission'
                        />
                        <Lock className={classes.lock} />
                    </Grid>
                </Grid>
            )}

            <img className={classes.vs} src={vsImg} alt='vs lightning bolt' /> */}
        </>
    );
};

// background: url(${vsImg}) 0 0 no-repeat;

const Round = styled.div`
    display: grid;
    grid-template-columns: 1fr minmax(80px, 1.5fr) 1fr;
    height: 40%;
    background-image: url(${vsImg});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    padding: 10px;
    position: relative;
    @media only screen and (max-width: 800px) {
        background-image: none;
    }
    & .versus__info {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        align-item: start;
        & > p {
            height: 30px;
            margin-left: 30px;
            padding: 20px;
        }
    }
`;
export { VersusRound };
