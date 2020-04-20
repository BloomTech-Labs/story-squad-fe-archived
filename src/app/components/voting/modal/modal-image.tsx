import React, { useState } from 'react';
import { DialogTitle, Grid, Dialog } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import story2 from '../img/chancewriting.jpg';

interface VotingModalProps {
    submission: string;
    username: string;
    type: 'Story' | 'Illustration';
    key: 'story1Points' | 'pic1Points' | 'story2Points' | 'pic2Points';
    points: number;
    handleChange: (e: any) => void;
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
            <Dialog className={classes.modal} open={open} onClose={handleClose}>
                <DialogTitle id='submission-title'></DialogTitle>
                <img src={story2} alt='submission image' />
            </Dialog>
        </>
    );
};
