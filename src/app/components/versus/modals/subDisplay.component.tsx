//initial copy from 'submissionDisplay(point allocation)
import React, { useState } from 'react';
import { DialogTitle, Grid, Dialog, Card, Icon } from '@material-ui/core';
import { useStyles } from './subDisplay-styles';
import { TextValidator } from 'react-material-ui-form-validator';
import { TransitionProps } from '@material-ui/core/transitions';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';

import './animation.css';

interface SubDisplayProps {
    submission: any;
    username: string;
    left: boolean;
    pulseAnim: boolean;
}
const Transition = React.forwardRef(function Transition(
    props: TransitionProps,
    ref: React.Ref<unknown>
) {
    return <Slide direction='up' ref={ref} {...props} />;
});
export const SubmissionDisplay: React.FC<SubDisplayProps> = ({
    submission,
    username,
    left,
    pulseAnim,
}) => {
    const [open, setOpen] = useState<boolean>(false);
    const classes = useStyles({});
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    console.log('submission from modal', submission);
    return (
        <Grid container className={classes.gridContainer}>
            <Grid item md>
                <img
                    id={pulseAnim ? 'pulse' : null}
                    src={submission[0]}
                    className={left ? classes.imagePreview : classes.imageUnlocked}
                    onClick={handleOpen}
                    alt={`${username}'s Story Preview`}
                />
            </Grid>
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
        </Grid>
    );
};
