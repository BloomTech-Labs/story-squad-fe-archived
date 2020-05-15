import React, { useState } from 'react';
import { DialogTitle, Grid, Dialog, useMediaQuery } from '@material-ui/core';
import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { TransitionProps } from '@material-ui/core/transitions';
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

const Transition = React.forwardRef(function Transition(
    props: TransitionProps,
    ref: React.Ref<unknown>
) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        'iconBox': {
            width: '5vh',
            height: '10vh',
            margin: '0 auto',
        },
        'imagePreview': {
            width: '175px',
            height: '175px',
            borderRadius: '14px',
            cursor: 'pointer',
        },
        'modalpop': {
            border: '7px solid black',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
        },
        'modalpop>': {
            backgroundColor: 'red',
            padding: '100px',
        },
        'imgDiv': {
            'width': '70%',
            '&& img': {
                maxidth: '100%',
            },
        },
        'subTitle': {
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
                        src={submission[0]}
                        className={classes.imagePreview}
                        onClick={handleOpen}
                        alt={'user submission'}
                    />
                </Grid>
                <Dialog
                    fullScreen
                    open={open}
                    TransitionComponent={Transition}
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
                        {/* breaks on undefined */}
                        {submission[1].length === 0 ? (
                            <div key={key} className={classes.imgDiv}>
                                <img src={submission[0]} alt={`User's ${type} submission`} />
                            </div>
                        ) : (
                            submission.map((page, index) => (
                                <div key={key} className={classes.imgDiv}>
                                    <img src={page} alt={`Page ${index} of ${type}`} />
                                </div>
                            ))
                        )}
                    </div>
                </Dialog>
            </Grid>
        </>
    );
};
