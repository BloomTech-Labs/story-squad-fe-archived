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

interface VotingProps {
    open: boolean;
    setOpen: any;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        popup: {
            backgroundColor: 'white',
            border: '2.5px solid black',
            borderRadius: '1%',
            boxShadow: theme.shadows[5],
        },
        popupTxt: {
            color: 'black',
            fontSize: '18px',
            fontWeight: 'bold',
            fontFamily: 'nunito',
            margin: '4%',
        },
        orangeButton: {
            'margin': '1%',
            'backgroundColor': '#FF6B35',
            'fontSize': '16px',
            'fontWeight': 'bold',
            'borderRadius': '10px',
            'color': 'white',
            'border': '1.8px solid #292929',
            'textTransform': 'capitalize',
            'fontFamily': 'nunito',
            'width': '90px',
            '&:hover': {
                backgroundColor: '#FF6B35',
            },
        },
    })
);

export const Popup: React.FC<VotingProps> = ({ open, setOpen }) => {
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
                // aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'>
                {/* <DialogTitle id='alert-dialog-title'>
                    {"Use Google's location service?"}
                </DialogTitle> */}
                <div className={classes.popup}>
                    <DialogContent>
                        <DialogContentText className={classes.popupTxt}>
                            Oops! Please select 4-6 emojis for each player
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} className={classes.orangeButton}>
                            Go Back
                        </Button>
                        {/* <Button onClick={handleClose} color='primary' autoFocus>
                        Agree
                    </Button> */}
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    );
};
