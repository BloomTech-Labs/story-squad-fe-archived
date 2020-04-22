import React, { useState } from 'react';
import { DialogTitle, Grid, Dialog } from '@material-ui/core';
import { TextValidator } from 'react-material-ui-form-validator';
import { useStyles } from './submissionDisplay-styles';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

interface SubmissionDisplayProps {
    submission: string;
    username: string;
    type: 'Story' | 'Illustration';
    key: 'story1Points' | 'pic1Points' | 'story2Points' | 'pic2Points';
    points: number;
    handleChange: (e: any) => void;
}

export const SubmissionDisplay: React.FC<SubmissionDisplayProps> = ({
    submission,
    username,
    type,
    key,
    handleChange,
    points,
}) => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({});
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Grid
                container
                direction='column'
                justify='space-evenly'
                alignItems='center'
                alignContent='center'>
                <Grid item md>
                    <img
                        src={submission}
                        className={classes.imagePreview}
                        onClick={handleOpen}
                        alt={`${username}'s ${type}`}
                    />
                </Grid>
                <Grid item md>
                    <TextValidator
                        validators={['minNumber:10', 'maxNumber:70', 'required']}
                        errorMessages={[
                            'Oops! Each submission must be given at least 10 points.',
                            'Oops! A submission cannot be given more than 70 points.',
                            'This is required.',
                        ]}
                        className={classes.pointInput}
                        required
                        autoFocus
                        name={key}
                        value={points}
                        onChange={handleChange}
                        type='number'
                        InputProps={{ inputProps: { min: 10, max: 70 } }}
                        style={{
                            background: 'white',
                            width: '145px',
                            borderRadius: '5px',
                        }}
                        variant='outlined'
                    />
                </Grid>
                <Dialog fullScreen open={open}>
                    <IconButton
                        edge='start'
                        color='inherit'
                        onClick={handleClose}
                        aria-label='close'>
                        <CloseIcon />
                    </IconButton>
                    <DialogTitle id='submission-title' className={classes.submissionHeader}>
                        {`${username}'s ${type}`}
                    </DialogTitle>
                    <div className={classes.viewPageDiv}>
                        <img
                            className={classes.submissionImg}
                            src={submission}
                            alt={`${username}'s ${type}`}
                        />
                    </div>
                </Dialog>
            </Grid>
        </>
    );
};
