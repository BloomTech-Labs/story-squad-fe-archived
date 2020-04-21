import React from 'react';
import { MenuButton } from '../../reusable-components';
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
        <Grid container direction='row' className={classes.appBar}>
            <Grid className={classes.headerMenuDiv} container item>
                <div className={classes.upperTitleDiv}>
                    <Typography className={classes.h2Styling} variant='h2'>
                        The Match Up
                    </Typography>
                </div>
                <div className={classes.upperHeaderButtonDiv}>
                    <MenuButton />
                </div>
                <div className={classes.teamName}>
                    <Typography className={classes.h4Styling}>{homeTeam}</Typography>
                    <Typography className={classes.h4Styling}>VS</Typography>
                    <Typography className={classes.h4Styling}>{awayTeam}</Typography>
                </div>
                <Typography className={classes.h3Styling}>201 Points Needed To Win!</Typography>
            </Grid>
        </Grid>
    );
};
export { VersusHeader };
