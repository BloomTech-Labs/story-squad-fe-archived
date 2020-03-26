import React, { useState, useEffect } from 'react';
import 'typeface-nunito';

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
import { useStyles } from './versus-styles';
import { Child } from '../../models';
import { Link } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import AcceptMissionButton from './img/Accept-mission-button.png';

import vsImg from './img/VS.png';

interface PointCardProps {
    child: Child;
}
// TODO - import useStyles from versus-styles.tsx
const Versus: React.FC<PointCardProps> = ({ child }) => {
    const classes = useStyles({});
    return (
        <Container className={classes.containerStyling}>
            <Grid container>
                {/* Header code */}
                <Grid container direction='row' className={classes.appBar}>
                    <Grid container item justify='space-around' alignItems='center'>
                        <Typography className={classes.h2Styling} variant='h2'>
                            The Match Up
                        </Typography>
                        {/*team1 placeholder*/}
                        <Typography>VS</Typography>
                        {/*team2 placeholder*/}
                        <Typography>201 Points Needed To Win!</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.topRow}>
                <Grid className={classes.story1}>
                    <div className={classes.nameRow}>
                        <div className={classes.leftPlayer}>
                            <Avatar></Avatar>
                            <h2>Name1</h2>
                        </div>
                        <div className={classes.rightPlayer}>
                            <Avatar></Avatar>
                            <h2>Name1</h2>
                        </div>
                    </div>
                    <div className={classes.subRow}>
                        <Avatar></Avatar>
                        <div className={classes.totalScore}>
                            <p>Total</p>
                        </div>
                        <Avatar></Avatar>
                    </div>
                    <img className={classes.vs} src={vsImg} alt='this is a lightning bolt thing' />
                </Grid>
                <Grid className={classes.story2}>
                    <img className={classes.vs} src={vsImg} alt='this is a lightning bolt thing' />
                </Grid>
            </Grid>
            <Grid className={classes.bottomRow}>
                <Grid className={classes.picture1}>
                    <img className={classes.vs} src={vsImg} alt='this is a lightning bolt thing' />
                </Grid>
                <Grid className={classes.picture2}>
                    <img className={classes.vs} src={vsImg} alt='this is a lightning bolt thing' />
                </Grid>
            </Grid>
        </Container>
    );
};

export { Versus };
