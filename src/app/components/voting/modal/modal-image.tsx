import React, { useState } from 'react';
import { DialogTitle, Grid, Dialog, useMediaQuery } from '@material-ui/core';
import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
// import story2 from '../img/chancewriting.jpg';
import Slide from '@material-ui/core/Slide';

interface VotingModalProps {
    submission;
    // username;
    type;
    key;
    // points;
    response;
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        iconBox: {
            width: '5vh',
            height: '10vh',
            margin: '0 auto',
        },
        imagePreview: {
            width: '175px',
            height: '175px',
            borderRadius: '14px',
            cursor: 'pointer',
        },
        modalpop: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
        },
        imgDiv: {
            'minWidth': '70%',
            '&& img': {
                minWidth: '100%',
            },
        },
        subTitle: {
            textTransform: 'capitalize',
        },
    })
);

export const VotingModal: React.FC<VotingModalProps> = ({
    submission,
    // username,
    type,
    key,
    // points,
    response,
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
    // console.log('response in modal', response);
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
                        alt={'user submission'}
                    />
                </Grid>
                <Dialog
                    fullScreen
                    open={open}
                    // TransitionComponent={Transition}
                >
                    <div className={classes.modalpop}>
                        <div className={classes.iconBox}>
                            <IconButton
                                edge='start'
                                color='inherit'
                                onClick={handleClose}
                                aria-label='close'
                                disableRipple={true}>
                                <CloseIcon className={classes.closeButton} />
                            </IconButton>
                        </div>
                        {/* <DialogTitle className={classes.subTitle} id='submission-title'>
                            {`${username}'s ${type}`}
                        </DialogTitle> */}
                        <div className={classes.imgDiv}>
                            <img src={submission} alt={'user submission'} />
                        </div>
                    </div>
                </Dialog>
            </Grid>
        </>
    );
};
