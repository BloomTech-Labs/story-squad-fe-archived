//initial copy from 'submissionDisplay(point allocation)
import React, { useState } from 'react';
import { DialogTitle, Grid, Dialog, Slide } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { TextValidator } from 'react-material-ui-form-validator';
import { TransitionProps } from '@material-ui/core/transitions';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement }
) {
    return <Slide direction='up' />;
});
interface SubDisplayProps {
    submission: string;
    username: string;
    type: 'Story' | 'Illustration';
    key: 'story1Points' | 'pic1Points' | 'story2Points' | 'pic2Points';
    points: number;
    // handleChange: (e: any) => void;
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
            width: 400,
            position: 'absolute',
            boxShadow: theme.shadows[5],
        },
        root: {
            fontFamily: 'nunito',
            margin: 0,
            padding: theme.spacing(2),
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
        imagePreview: {
            width: '150px',
            height: '90px',
            borderRadius: '10px',
        },
    })
);

export const SubmissionDisplay: React.FC<SubDisplayProps> = ({
    submission,
    username,
    type,
    key,
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
                <Dialog fullScreen open={open}>
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
