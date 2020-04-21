//initial copy from 'submissionDisplay(point allocation)
import React, { useState } from 'react';
import { DialogTitle, Grid, Dialog, Slide } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { TextValidator } from 'react-material-ui-form-validator';
import { TransitionProps } from '@material-ui/core/transitions';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { ReactComponent as LockIcon } from '../img/lock-icon.svg';
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
    const [isLocked, setLocked] = useState({ one: false, two: false, three: false, four: false });
    const [open, setOpen] = useState(false);
    const classes = useStyles({});
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return !isLocked.one ? (
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
    ) : (
        <>
            <Grid
                container
                direction='column'
                justify='space-between'
                alignItems='center'
                alignContent='center'>
                <Grid item md>
                    <div
                        style={{
                            backgroundImage: `url(${submission})`,
                            width: '180px',
                            height: '120px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundSize: 'center',
                        }}>
                        <LockIcon />
                    </div>
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
