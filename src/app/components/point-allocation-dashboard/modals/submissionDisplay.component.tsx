import React, { useState } from 'react';
import { DialogTitle, Grid, Dialog, Card } from '@material-ui/core';
import { TextValidatorComp } from './textValidatorComp';
import { TextValidator } from 'react-material-ui-form-validator';
import { useStyles } from './submissionDisplay-styles';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

interface SubmissionDisplayProps {
    child?: any;
    submission: string | any;

    type: 'Story' | 'Illustration';
    key: any;
    points: number;
    handleChange: (e: any) => void;
    disabledForm: any;
}

export const SubmissionDisplay: React.FC<SubmissionDisplayProps> = ({
    child,
    submission,

    type,
    key,
    handleChange,
    points,
    disabledForm,
}) => {
    const { username } = child;
    const [open, setOpen] = useState(false);
    const [pages, setPage] = useState(false);
    const classes = useStyles({});
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const openPage = () => {
        setPage(true);
    };
    const closePage = () => {
        setPage(false);
    };
    console.log(child);
    return (
        <>
            <Grid container className={classes.gridContainer}>
                <Grid item md>
                    <img
                        src={submission[0]}
                        className={classes.imagePreview}
                        onClick={handleOpen}
                        alt={`${username}'s Story Preview`}
                    />
                </Grid>
                <TextValidatorComp
                    key={key}
                    points={points}
                    handleChange={handleChange}
                    disabledForm={disabledForm}
                />
                <Dialog fullScreen open={open}>
                    <IconButton
                        edge='start'
                        color='inherit'
                        onClick={handleClose}
                        aria-label='close'>
                        <CloseIcon />
                    </IconButton>
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
                                        <IconButton
                                            edge='start'
                                            color='inherit'
                                            onClick={closePage}
                                            aria-label='close'>
                                            <CloseIcon />
                                        </IconButton>
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
        </>
    );
};
