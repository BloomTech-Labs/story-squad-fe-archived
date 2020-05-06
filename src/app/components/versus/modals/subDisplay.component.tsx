//initial copy from 'submissionDisplay(point allocation)
import React, { useState } from 'react';
import { DialogTitle, Grid, Dialog, Card } from '@material-ui/core';
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
    const [open, setOpen] = useState(false);
    const [pages, setPage] = useState(false);
    const classes = useStyles({});
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    // for story multipage preview
    const openPage = () => {
        setPage(true);
    };
    const closePage = () => {
        setPage(false);
    };

    return (
        <>
            {/* {typeof submission === 'string' ? (
                // renders modal for illustrations
                <Grid container className={classes.gridContainer}>
                    <Grid item md>
                        <img
                            src={submission}
                            className={classes.imagePreview}
                            onClick={handleOpen}
                            alt={`${username}'s`}
                        />
                    </Grid>
                    <Dialog fullScreen open={open}>
                        <div className={classes.iconBox}>
                            <IconButton
                                edge='start'
                                color='inherit'
                                onClick={handleClose}
                                aria-label='close'>
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <DialogTitle id='submission-title' className={classes.submissionHeader}>
                            {`${username}'s Drawing!`}
                        </DialogTitle>
                        <div className={classes.viewPageDiv}>
                            <img
                                className={classes.submissionImg}
                                src={submission}
                                alt={`${username}'s Drawing!`}
                            />
                        </div>
                    </Dialog>
                </Grid>
            ) : !submission[1] ? (
                // renders modal for story with one page
                <Grid container className={classes.gridContainer}>
                    <Grid item md>
                        <img
                            src={submission[0]}
                            className={classes.imagePreview}
                            onClick={handleOpen}
                            alt={`${username}'s`}
                        />
                    </Grid>
                    <Dialog fullScreen open={open}>
                        <div className={classes.iconBox}>
                            <IconButton
                                edge='start'
                                color='inherit'
                                onClick={handleClose}
                                aria-label='close'>
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <DialogTitle id='submission-title' className={classes.submissionHeader}>
                            {`${username}'s Drawing!`}
                        </DialogTitle>
                        <div className={classes.viewPageDiv}>
                            <img
                                className={classes.submissionImg}
                                src={submission[0]}
                                alt={`${username}'s Drawing!`}
                            />
                        </div>
                    </Dialog>
                </Grid>
            ) : (
                // renders modal for story with multiple pages */}
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
                    <DialogTitle className={classes.submissionHeader} id='submission-title'>
                        {`${username}'s Story!`}
                    </DialogTitle>
                    {submission.map(
                        (page, key) =>
                            page && (
                                <Grid className={classes.gridContainer}>
                                    <Card key={key} className={classes.storyPages}>
                                        <DialogTitle id='submission-title'>
                                            {`Page ${key + 1}`}
                                        </DialogTitle>
                                        <img
                                            src={page}
                                            className={classes.thumbnail}
                                            onClick={openPage}
                                        />
                                    </Card>
                                    <Dialog fullScreen open={pages}>
                                        <div className={classes.iconBox}>
                                            <IconButton
                                                edge='start'
                                                color='inherit'
                                                onClick={closePage}
                                                aria-label='close'>
                                                <CloseIcon />
                                            </IconButton>
                                        </div>
                                        <div className={classes.viewPageDiv}>
                                            <img
                                                src={page}
                                                className={classes.submissionImg}
                                                alt={`${username}'s story submission, page ${key}`}
                                            />
                                        </div>
                                    </Dialog>
                                </Grid>
                            )
                    )}
                </Dialog>
            </Grid>
            )}
        </>
    );
};
