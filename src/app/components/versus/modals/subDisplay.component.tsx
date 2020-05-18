//initial copy from 'submissionDisplay(point allocation)
import React, { useState } from 'react';
import { DialogTitle, Grid, Dialog, Card, Icon } from '@material-ui/core';
import { useStyles } from './subDisplay-styles';
import { TextValidator } from 'react-material-ui-form-validator';
import { TransitionProps } from '@material-ui/core/transitions';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';

interface SubDisplayProps {
    submission: any;
    username: string;
}
const Transition = React.forwardRef(function Transition(
    props: TransitionProps,
    ref: React.Ref<unknown>
) {
    return <Slide direction='up' ref={ref} {...props} />;
});
export const SubmissionDisplay: React.FC<SubDisplayProps> = ({ submission, username }) => {
    const [open, setOpen] = useState<boolean>(false);
    const classes = useStyles({});
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid container className={classes.gridContainer}>
            <Grid item md>
                <img
                    src={submission[0]}
                    className={classes.imagePreview}
                    onClick={handleOpen}
                    alt={`${username}'s Story Preview`}
                />
            </Grid>
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
            </Dialog>
        </Grid>
    );
};
