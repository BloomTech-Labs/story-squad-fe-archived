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
    submission: any;
    username: string;
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
    const openPage = () => {
        setPage(true);
    };
    const closePage = () => {
        setPage(false);
    };
    return (
        <>
            {typeof submission === 'string' ? (
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
                            alt={`${username}'s`}
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
                        <DialogTitle id='submission-title'>{`${username}'s`}</DialogTitle>
                        <div>
                            <img src={submission} alt={`${username}'s`} />
                        </div>
                    </Dialog>
                </Grid>
            ) : (
                <Grid
                    container
                    direction='column'
                    justify='space-between'
                    alignItems='center'
                    alignContent='center'>
                    <Grid item md>
                        <img
                            src={submission[0]}
                            className={classes.imagePreview}
                            onClick={handleOpen}
                            alt={`${username}'s`}
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
                        <DialogTitle id='submission-title'>{`${username}'s`}</DialogTitle>
                        {submission.map(
                            (page, key) =>
                                page && (
                                    <Grid
                                        container
                                        justify='space-between'
                                        alignItems='center'
                                        alignContent='center'>
                                        <Grid item md key={key}>
                                            <img
                                                src={page}
                                                className={classes.imagePreview}
                                                onClick={openPage}
                                            />
                                        </Grid>
                                        <Dialog fullScreen open={pages}>
                                            <IconButton
                                                edge='start'
                                                color='inherit'
                                                onClick={closePage}
                                                aria-label='close'>
                                                <CloseIcon />
                                            </IconButton>
                                            <div>
                                                <img src={page} alt={`${username}'s`} />
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
