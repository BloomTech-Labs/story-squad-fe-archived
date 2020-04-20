import React from 'react';
import {
    Button,
    Avatar,
    Typography,
    Container,
    Grid,
    Modal,
    Fade,
    Backdrop,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    CircularProgress,
    Card,
    Checkbox,
    Paper,
    Popper,
    MenuItem,
    MenuList,
    Grow,
    ClickAwayListener,
} from '@material-ui/core';
import { useStyles } from '../versus-styles';

interface HeaderProps {
    homeTeam: string;
    awayTeam: string;
}
const VersusHeader: React.FC<HeaderProps> = ({ homeTeam, awayTeam }) => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid container direction='row' className={classes.appBar}>
                <Grid container item direction='column' justify='space-around' alignItems='center'>
                    <Typography className={classes.h2Styling} variant='h2'>
                        The Match Up
                    </Typography>
                    {/* team1 placeholder*/}
                    <div className={classes.teamName}>
                        <Typography className={classes.h4Styling}>{homeTeam}</Typography>
                        <Typography className={classes.h4Styling}>VS</Typography>
                        {/* team2 placeholder*/}
                        <Typography className={classes.h4Styling}>{awayTeam}</Typography>
                    </div>
                    <Typography className={classes.h3Styling}>201 Points Needed To Win!</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};
export { VersusHeader };
