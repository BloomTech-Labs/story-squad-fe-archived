//initial copy from 'submissionDisplay(point allocation)
import React, { useState } from 'react';
import { DialogTitle, Grid, Dialog, Icon, Badge } from '@material-ui/core';
import { useStyles } from './subDisplay-styles';
import { TransitionProps } from '@material-ui/core/transitions';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import { Child } from '../../../models/Child';
import { FeedbackPopup } from '../emoji-feedback/feedback-popup';
import ava1 from '../img/ava1.svg';
import Card from '../../reusable-components/card/Card';
import styled from 'styled-components';
import { ReactComponent as Lock } from '../img/lock-icon.svg';
import { useHistory } from 'react-router-dom';
import key from '../img/Key.png';

import './animation.css';

interface SubDisplayProps {
    user: any;
    reverse?: boolean;
    left?: boolean;
    pulseAnim?: boolean;
    child?: any;
    locked?: boolean;
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps,
    ref: React.Ref<unknown>
) {
    return <Slide direction='up' ref={ref} {...props} />;
});

export const SubmissionDisplay: React.FC<SubDisplayProps> = ({
    user,
    reverse,
    left,
    locked,
    pulseAnim,
    child,
}) => {
    // =======
    // export const SubmissionDisplay: React.FC<SubDisplayProps> = ({
    //     submission,
    //     username,
    //     left,
    //     pulseAnim,
    // }) => {
    // >>>>>>> ba022fc4803a32e50c6010358d3bb7fa4642c23c
    const history = useHistory();
    console.log({ locked }, { reverse });
    console.log(!locked && locked != undefined);
    if (user.childId === child.id && user.emojis.length > 0) {
        const max = user.emojis.reduce(function(prev, current) {
            if (+current.id > +prev.id) {
                return current;
            } else {
                return prev;
            }
        });
        user.newEmoji = max.emoji.replace(/[.{.}."]/g, '').split(',');
    }

    const [open, setOpen] = useState<boolean>(false);
    const [emojiPopup, setEmojiPopup] = useState<boolean>(false);
    const classes = useStyles({});
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    if (user.username.length > 10) {
        user.username = user.username.substring(0, 10) + '...';
    }
    const submissionCheck = (submission): string[] =>
        typeof submission === 'string' ? [submission] : Object.values(submission);
    const submission = submissionCheck(user.story || user.illustration);
    if (!user) {
        return;
    }
    return (
        <>
            {user && (
                <CardContainer reverse={reverse}>
                    {/* <Avatar className={classes.avatarStyle} src={ava1}></Avatar>
            <div className={classes.playerName}>{matchup[0].username}</div>
            
                <div className={classes.rightPlayer}>
                <div className={classes.playerName}>{matchup[1].username}</div>
                <Avatar className={classes.avatarStyle} src={ava1}></Avatar>
                </div>
              </div> */}
                    <div>
                        <p className='text--large'>{user.username} </p>
                        <img src={ava1} alt='Placeholder Avatar' />
                        {user.newEmoji ? (
                            <Badge
                                onClick={() => {
                                    setEmojiPopup(true);
                                }}
                                className={classes.badge}
                                color='error'
                                badgeContent={user.emojis.length}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}>
                                <></>
                            </Badge>
                        ) : null}
                    </div>
                    <div className='img__container'>
                        <div>
                            <img
                                id={pulseAnim ? 'pulse' : null}
                                src={submission[0]}
                                className={left ? classes.imagePreview : classes.imageUnlocked}
                                onClick={handleOpen}
                                alt={`${user.username}'s Story Preview`}
                            />
                            {!locked && locked != undefined ? (
                                <Lock
                                    // className={alwaysLocked ? classes.lock : classes.lockKey}
                                    onClick={() => history.push(`/voting`)}
                                />
                            ) : null}
                        </div>
                    </div>

                    <Dialog fullScreen open={open} TransitionComponent={Transition}>
                        <div className={classes.iconBox}>
                            <IconButton edge='start' onClick={handleClose} aria-label='close'>
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <Grid className={classes.gridContainer}>
                            {submission.map(
                                (page, key) =>
                                    page && (
                                        <div key={key} className={classes.viewPageDiv}>
                                            <img
                                                src={page}
                                                className={classes.submissionImg}
                                                alt={`story submission, page ${key}`}
                                            />
                                        </div>
                                    )
                            )}
                        </Grid>
                        <div className={classes.iconBox}>
                            <IconButton edge='start' onClick={handleClose} aria-label='close'>
                                <CloseIcon />
                            </IconButton>
                        </div>
                    </Dialog>
                    <FeedbackPopup
                        emojis={user.newEmoji}
                        open={emojiPopup}
                        setOpen={setEmojiPopup}
                        submission={submission}
                    />
                </CardContainer>
            )}
        </>
    );
};

const CardContainer = styled.div`
    display: grid;
    grid-template-rows: 20% 80%;
    justify-content: space-around;
    & > div:nth-of-type(1) {
        display: flex;
        margin: 0;
        flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
        justify-content: space-around;
    }
    & > .img__container {
        height: 130px;

        width: 100%;
        align-self: center;
    }
    & > .img__container div {
        display: grid;

        height: 100%;
        width: 80%;
        margin: 0 auto;
    }
    & .img__container  *{
        grid-row: 1/2;
        grid-column 1/2;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    & .img__container svg {
      cursor: url(${key}) 2 26, default
    }
`;
