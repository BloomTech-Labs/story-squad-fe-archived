//initial copy from 'submissionDisplay(point allocation)
import React, { useState } from 'react';
import { DialogTitle, Grid, Dialog, Icon } from '@material-ui/core';
import { useStyles } from './subDisplay-styles';
import { TransitionProps } from '@material-ui/core/transitions';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import { Child } from '../../../models/Child';
import ava1 from '../img/ava1.svg';
import Card from '../../reusable-components/card/Card';
import styled from 'styled-components';

interface SubDisplayProps {
    user: Child;
    reverse?: boolean;
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps,
    ref: React.Ref<unknown>
) {
    return <Slide direction='up' ref={ref} {...props} />;
});
export const SubmissionDisplay: React.FC<SubDisplayProps> = ({ user, reverse }) => {
    const [open, setOpen] = useState<boolean>(false);
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
    return (
        <CardContainer reverse={reverse}>
            {/* <FeedbackPopup
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
             
                <div className={classes.rightPlayer}>
                    <div className={classes.playerName}>{matchup[1].username}</div>
                    <Avatar className={classes.avatarStyle} src={ava1}></Avatar>
                </div>
            </div> */}
            <div>
                <p className='text--large'>{user.username} </p>
                <img src={ava1} alt='Placeholder Avatar' />
            </div>
            <div className='img__container'>
                <img
                    src={submission[0]}
                    onClick={handleOpen}
                    alt={`${user.username}'s Story Preview`}
                />
            </div>

            <Dialog fullScreen open={open} TransitionComponent={Transition}>
                <div className={classes.iconBox}>
                    <IconButton
                        edge='start'
                        // color='inherit'
                        onClick={handleClose}
                        aria-label='close'>
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
                    <IconButton
                        edge='start'
                        // color='inherit'
                        onClick={handleClose}
                        aria-label='close'>
                        <CloseIcon />
                    </IconButton>
                </div>
            </Dialog>
        </CardContainer>
    );
};

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    & > div:nth-of-type(1) {
        display: flex;

        flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
        justify-content: space-around;
    }
    & > .img__container {
        height: 200px;

        width: 75%;
        align-self: center;
    }
    & .img__container img {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
    }
`;
