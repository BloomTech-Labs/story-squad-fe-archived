import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core';
import story1 from './img/leowriting.jpg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        inputDiv: {
            width: '290px',
            height: '35px',
            background: 'rgba(255, 255, 255, 0.75)',
            borderRadius: '5px',
            marginTop: '5%',
            padding: '.8%',
            fontSize: '20px',
            paddingLeft: '4%',
        },
        emojiSpan: {
            letterSpacing: '15px',
            textAlign: 'center',
            paddingBottom: '1.5%',
            fontSize: '20px',
        },
        popupDiv: {
            // width: '566px',
            // height: '271px',
            backgroundColor: '#B5D33D',
            border: '4px solid #1B1B1B',
            borderRadius: '4px',
            boxShadow: theme.shadows[5],
            textAlign: 'center',
        },
        popupTxt: {
            color: 'black',
            fontSize: '30px',
            fontWeight: 'bold',
            fontFamily: 'nunito',
        },
        storyPic: {
            width: '40%',
            height: '20vh',
            margin: '0 auto',
            borderRadius: '5%',
            border: '2px solid #FFCE64',
        },
    })
);

interface VersusProps {
    submission: any;
    open: boolean;
    setOpen: any;
}

// { open, setOpen } in props
// <VersusProps>
export const FeedbackPopup: React.FC<VersusProps> = ({ open, setOpen, submission }) => {
    // const [open, setOpen] = React.useState(false);
    const classes = useStyles({});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {/* <Button variant='outlined' color='primary' onClick={handleClickOpen}>
                Open alert dialog
            </Button> */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'>
                <div className={classes.popupDiv}>
                    <DialogTitle className={classes.popupTxt}>
                        {'Here is some feedback about your story'}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText className={classes.mainContainer}>
                            <img src={submission[0]} className={classes.storyPic} />
                            <div className={classes.inputDiv}>
                                <span className={classes.emojiSpan}>😞😪😴😷😎😕</span>
                            </div>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Go Back</Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    );
};
