import React, { useState, useEffect } from 'react';
import 'typeface-nunito';
import { useStyles } from './voting-styles';
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
// import { useStyles } from './voting-styles';
import { Child, Cohort } from '../../models';

interface VotingCardProps {
    child: Child;
}

const Voting: React.FC<VotingCardProps> = ({ child }) => {
    // return <h1>Hello World</h1>;
    const classes = useStyles({});
    return (
        <Container className={classes.containerStyling}>
            <Grid container>
                {/* Header code */}
                <Grid container direction='row' className={classes.appBar}>
                    <Grid
                        container
                        item
                        direction='column'
                        justify='space-around'
                        alignItems='center'>
                        <Typography className={classes.h2Styling} variant='h2'>
                            Vote For Your Favorite Story
                        </Typography>
                        {/* <Typography className={classes.h3Styling}>Choose Your Favorite</Typography> */}
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.topRow}>
                <Grid className={classes.story1}>side 1</Grid>
                <Grid className={classes.story2}>side 2</Grid>
            </Grid>
        </Container>
    );
};

export { Voting };
