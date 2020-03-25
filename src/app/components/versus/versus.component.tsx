import React, { useState, useEffect } from 'react';
import 'typeface-nunito';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
    Button,
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
import { Child } from '../../models';
import { Link } from 'react-router-dom';
import { useForm, useAPI } from '../../hooks';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import AcceptMissionButton from './img/Accept-mission-button.png';
import AvatarButton from './img/Avatar-button.png';
import PassportButton from './img/Passport-button.png';
import TrophyRoomButton from './img/Trophy-room-button.png';
import Splode from './img/splode.png';
import cityscape from '../child-dashboard/kid-progress/icons/cityscape.png';

interface PointCardProps {
    child: Child;
}

const Versus: React.FC<PointCardProps> = ({ child }) => {
    const classes = useStyles({});

    return (
        <Container className={classes.containerStyling}>
            <Grid container>
                {/* Header code */}
                <Grid container direction='row' className={classes.appBar}>
                    <Grid container item justify='space-around' alignItems='center'>
                        <Typography className={classes.h2Styling} variant='h2'>
                            Story Squad
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.topRow}>
                <Grid className={classes.mission}>
                    <Link to={'/kids-mission'}>
                        <img
                            className={classes.pictureHover}
                            src={AcceptMissionButton}
                            alt='Accept your weekly mission!'
                        />
                    </Link>
                </Grid>
                <Grid className={classes.avatarCreator}>
                    <img src={AvatarButton} alt='Create your Story Squad Avatar!' />
                </Grid>
            </Grid>
            <Grid className={classes.bottomRow}>
                <Grid className={classes.passport}>
                    <img src={PassportButton} alt='???' />
                </Grid>
                <Grid className={classes.trophyRoom}>
                    <img src={TrophyRoomButton} alt='See who has the most victories and points!' />
                </Grid>
            </Grid>
        </Container>
    );
};

export { Versus };
