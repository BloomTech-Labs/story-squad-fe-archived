import React, { useState } from 'react';
import { DialogTitle, Grid, Dialog, useMediaQuery } from '@material-ui/core';
import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import story2 from '../img/chancewriting.jpg';

interface VotingModalProps {
    submission;
    username;
    type;
    key;
    points;
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
        },
        root: {
            fontFamily: 'nunito',
            display: 'flex',
            flexDirection: 'column',
        },
        gridRow: {
            height: '274px',
            backgroundColor: '#EB7D5B',
            paddingTop: '32px',
            padding: '30px',
        },
        gridInput: {
            backgroundColor: '#EB7D5B',
            padding: '53px ',
        },
        pointInput: {
            fontFamily: 'Bangers',
            fontSize: '48px',
            fontWeight: 'bold',
        },
        imagePreview: {
            width: '175px',
            height: '175px',
            borderRadius: '14px',
        },
    })
);

export const VotingModal: React.FC<VotingModalProps> = ({
    submission,
    username,
    type,
    key,
    points,
}) => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
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
                justify='space-between'
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
                <Dialog fullScreen={fullScreen} open={open}>
                    <IconButton
                        edge='start'
                        color='inherit'
                        onClick={handleClose}
                        aria-label='close'>
                        <CloseIcon />
                    </IconButton>
                    <DialogTitle id='submission-title'>{`${username}'s ${type}`}</DialogTitle>
                    <div>
                        <img src={submission} alt={`${username}'s ${type}`} />
                    </div>
                </Dialog>
            </Grid>
        </>
    );
};
