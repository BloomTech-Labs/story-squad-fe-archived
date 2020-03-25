import React, { useState } from 'react';
import { Backdrop, Grid, Modal, Fade } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { ValidateForm, TextValidator } from 'react-material-ui-form-validator';

interface SubmissionDisplayProps {
    submission: string;
    username: string;
    type: 'Story' | 'Illustration';
    points: number;
    key: 'story1Points' | 'pic1Points' | 'story2Points' | 'pic2Points';
    handleInputChange: (e: any) => void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        root: {
            fontFamily: 'nunito',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '510%',
        },
        gridRow: {
            height: '274px',
            backgroundColor: '#EB7D5B',
            paddingTop: '32px',
            padding: '30px',
            borderTop: '7px solid #000000',
            borderLeft: '14px solid #000000',
        },
        gridInput: {
            backgroundColor: '#EB7D5B',
            padding: '53px ',
            borderLeft: '14px solid #000000',
            borderBottom: '5px solid #000000',
        },
        pointInput: {
            fontFamily: 'Bangers',
            fontSize: '48px',
            fontWeight: 'bold',
        },
        imagePreview: {
            width: '250px',
            height: '125px',
            borderRadius: '14px',
        },
    })
);

export const SubmissionDisplay: React.FC<SubmissionDisplayProps> = ({
    submission,
    username,
    points,
    type,
    key,
    handleInputChange,
}) => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({});
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    console.log(points);

    return (
        <>
            <Grid
                container
                item
                justify='center'
                alignItems='center'
                sm={4}
                className={classes.gridRow}>
                {/* Story 1 Preview */}
                <img
                    src={submission}
                    className={classes.imagePreview}
                    onClick={handleOpen}
                    alt={`${username}'s ${type}`}
                />
            </Grid>
            <Grid container item justify='center' sm={4} className={classes.gridInput}>
                {/* Story 1 input */}
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
                    onChange={() => handleInputChange(key)}
                    value={points}
                    type='number'
                    InputProps={{ inputProps: { min: 10, max: 70 } }}
                    style={{
                        position: 'absolute',
                        top: '431px',
                        background: 'white',
                        width: '145px',
                        borderRadius: '5px',
                    }}
                    variant='outlined'
                />
            </Grid>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={open}>
                    <div className={classes.paper}>
                        <img src={submission} alt={`${username}'s ${type}`} />
                        <h2 id='transition-modal-title'>
                            {username}'s ${type}
                        </h2>
                    </div>
                </Fade>
            </Modal>
        </>
    );
};
