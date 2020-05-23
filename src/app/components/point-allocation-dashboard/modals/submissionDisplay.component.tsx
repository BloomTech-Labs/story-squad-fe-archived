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
    const classes = useStyles({});
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        // renders modal for story with multiple pages

        <Grid container className={classes.gridContainer}>
            <Grid item md>
                <img
                    src={submission[0]}
                    className={classes.imagePreview}
                    onClick={handleOpen}
                    alt={`${username}'s ${type} Preview`}
                />
            </Grid>
            <TextValidatorComp
                key={key}
                points={points}
                handleChange={handleChange}
                disabledForm={disabledForm}
            />
            <Dialog fullScreen open={open}>
                <IconButton edge='start' color='inherit' onClick={handleClose} aria-label='close'>
                    <CloseIcon />
                </IconButton>
                <DialogTitle className={classes.submissionHeader} id='submission-title'>
                    {`${username}'s ${type}!`}
                </DialogTitle>
                <Grid className={classes.gridContainer}>
                    {submission.map(
                        (page, key) =>
                            page && (
                                <div key={key} className={classes.viewPageDiv}>
                                    <img
                                        src={page}
                                        className={classes.submissionImg}
                                        alt={`${username}'s story submission, page ${key}`}
                                    />
                                </div>
                            )
                    )}
                </Grid>
            </Dialog>
        </Grid>
    );
};
