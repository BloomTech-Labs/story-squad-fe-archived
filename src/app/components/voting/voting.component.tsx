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
                            Voting
                        </Typography>
                        <Typography className={classes.h3Styling}>Choose Your Favorite</Typography>
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
                        {/* <Avatar></Avatar> */}
                        <div className={classes.totalScore}>
                            <p>Total</p>
                        </div>
                        {/* <Avatar></Avatar> */}
                    </div>
                </Grid>
                <Grid className={classes.story2}>Test</Grid>
            </Grid>
            {/* <Grid className={classes.bottomRow}>
                <Grid className={classes.picture1}></Grid>
                <Grid className={classes.picture2}></Grid>
            </Grid> */}
        </Container>
    );
};

export { Voting };
