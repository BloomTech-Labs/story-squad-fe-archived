import React, { useState, useEffect } from 'react';
import 'typeface-nunito';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
    TextField,
    Button,
    AppBar,
    Toolbar,
    Typography,
    Container,
    Grid,
    Avatar,
    Modal,
    Fade,
    Backdrop,
} from '@material-ui/core';

import { Points } from '../../models';
import { useForm } from '../../hooks';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Gecko from './gecko.jpg';

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
            padding: theme.spacing(2, 4, 3),
        },
        root: {
            fontFamily: 'nunito',
        },
        dashboardHeader: {
            fontFamily: 'nunito',
            backgroundColor: '#004775',
            marginBottom: '50px',
            height: '150px',
        },
        centerText: {
            justifyContent: 'space-around',
            padding: '50px',
        },
        gridMargin: {
            marginBottom: '20px',
        },
        orangeButton: {
            'marginTop': '20px',
            'backgroundColor': '#FF6B35',
            'fontSize': '24px',
            'fontWeight': 'bold',
            'borderRadius': '50px',
            'color': 'white',
            'width': '200px',
            'height': '50px',
            'boxShadow': '0px 8px 0px #97300A',
            'textTransform': 'capitalize',
            'fontFamily': 'nunito',
            '&:hover': {
                backgroundColor: '#FF6B35',
            },
        },
        pointInput: {
            width: '250px',
            fontFamily: 'nunito',
        },
        imagePreview: {
            width: '250px',
            height: '125px',
            borderRadius: '14px',
        },
        containerStyling: {
            padding: '0 100px 100px 100px',
            fontFamily: 'nunito',
        },
        h2Styling: {
            fontSize: '48px',
            fontFamily: 'nunito',
            fontWeight: 'bold',
        },
        h3Styling: {
            fontSize: '36px',
            fontFamily: 'nunito',
            fontWeight: 'bold',
        },
        avatarStyling: {
            marginBottom: '20px',
        },
        red: {
            color: 'red',
        },
    })
);
const PointDashboard: React.FC = () => {
    const { state, handleInputChange, handleSubmitBuilder } = useForm({
        story1Points: 10,
        story2Points: 10,
        pic1Points: 10,
        pic2Points: 10,
    });
    const [remainingPoints, setRemainingPoints] = useState(60);
    const classes = useStyles({});
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        setRemainingPoints(
            100 - (state.story1Points + state.story2Points + state.pic1Points + state.pic2Points)
        );
    }, [state]);

    const handleSubmit = () => {
        return console.log('submitted');
    };

    return (
        <div>
            <AppBar position='static' className={classes.dashboardHeader}>
                <Toolbar className={classes.centerText}>
                    <Typography className={classes.h2Styling} variant='h2'>
                        Point Share
                    </Typography>
                    <Typography className={classes.h3Styling} variant='h3'>
                        Points Remaining:
                        {remainingPoints < 0 || remainingPoints > 100 ? (
                            <div className={classes.red}>{remainingPoints}</div>
                        ) : (
                            <div>{remainingPoints}</div>
                        )}
                    </Typography>
                </Toolbar>
            </AppBar>
            <ValidatorForm onSubmit={handleSubmit} onError={(errors) => console.log(errors)}>
                <Container className={classes.containerStyling}>
                    <Grid container spacing={1}>
                        <Grid container direction='row' justify='center' alignItems='center'>
                            <Grid
                                container
                                item
                                justify='center'
                                direction='column'
                                alignItems='center'
                                sm={4}
                                spacing={1}
                                className={classes.gridMargin}>
                                <Avatar src='./gecko.jpg' className={classes.avatarStyling} />
                                username 1
                            </Grid>
                            <Grid
                                container
                                item
                                justify='center'
                                alignItems='center'
                                sm={4}
                                spacing={1}
                                className={classes.gridMargin}>
                                <img
                                    src={Gecko}
                                    className={classes.imagePreview}
                                    onClick={handleOpen}
                                />
                            </Grid>
                            <Grid
                                container
                                item
                                justify='center'
                                alignItems='center'
                                sm={4}
                                spacing={1}
                                className={classes.gridMargin}>
                                <img
                                    src={Gecko}
                                    className={classes.imagePreview}
                                    onClick={handleOpen}
                                />
                            </Grid>
                        </Grid>
                        <Grid container direction='row' justify='center' alignItems='center'>
                            <Grid
                                container
                                item
                                justify='center'
                                sm={4}
                                spacing={1}
                                className={classes.gridMargin}></Grid>
                            <Grid
                                container
                                item
                                justify='center'
                                sm={4}
                                spacing={1}
                                className={classes.gridMargin}>
                                <TextValidator
                                    validators={['minNumber:10', 'maxNumber:70', 'required']}
                                    errorMessages={[
                                        'Oops! Each submission must be given at least 10 points.',
                                        'Oops! A submission cannot be given more than 70 points.',
                                        'This is required.',
                                    ]}
                                    className={classes.pointInput}
                                    required
                                    autoFocus
                                    name='story1Points'
                                    onChange={handleInputChange('story1Points')}
                                    value={state.story1Points}
                                    type='number'
                                />
                            </Grid>
                            <Grid
                                container
                                item
                                justify='center'
                                sm={4}
                                spacing={1}
                                className={classes.gridMargin}>
                                <TextValidator
                                    validators={['minNumber:10', 'maxNumber:70', 'required']}
                                    errorMessages={[
                                        'Oops! Each submission must be given at least 10 points.',
                                        'Oops! A submission cannot be given more than 70 points.',
                                        'This is required.',
                                    ]}
                                    className={classes.pointInput}
                                    required
                                    autoFocus
                                    name='pic1Points'
                                    onChange={handleInputChange('pic1Points')}
                                    value={state.pic1Points}
                                    type='number'
                                />
                            </Grid>
                        </Grid>
                        <Grid container direction='row' justify='center' alignItems='center'>
                            <Grid
                                container
                                item
                                justify='center'
                                direction='column'
                                alignItems='center'
                                sm={4}
                                spacing={1}
                                className={classes.gridMargin}>
                                <Avatar src='./gecko.jpg' className={classes.avatarStyling} />
                                username 2
                            </Grid>
                            <Grid
                                container
                                item
                                justify='center'
                                alignItems='center'
                                sm={4}
                                spacing={1}
                                className={classes.gridMargin}>
                                <img src={Gecko} className={classes.imagePreview} />
                            </Grid>
                            <Grid
                                container
                                item
                                justify='center'
                                alignItems='center'
                                sm={4}
                                spacing={1}
                                className={classes.gridMargin}>
                                <img src={Gecko} className={classes.imagePreview} />
                            </Grid>
                        </Grid>
                        <Grid container direction='row' justify='center' alignItems='center'>
                            <Grid
                                container
                                item
                                justify='center'
                                sm={4}
                                spacing={1}
                                className={classes.gridMargin}></Grid>
                            <Grid
                                container
                                item
                                justify='center'
                                sm={4}
                                spacing={1}
                                className={classes.gridMargin}>
                                <TextValidator
                                    validators={['minNumber:10', 'maxNumber:70', 'required']}
                                    errorMessages={[
                                        'Oops! Each submission must be given at least 10 points.',
                                        'Oops! A submission cannot be given more than 70 points.',
                                        'This is required.',
                                    ]}
                                    className={classes.pointInput}
                                    required
                                    autoFocus
                                    name='story2Points'
                                    onChange={handleInputChange('story2Points')}
                                    value={state.story2Points}
                                    type='number'
                                />
                            </Grid>
                            <Grid
                                container
                                item
                                justify='center'
                                sm={4}
                                spacing={1}
                                className={classes.gridMargin}>
                                <TextValidator
                                    validators={['minNumber:10', 'maxNumber:70', 'required']}
                                    errorMessages={[
                                        'Oops! Each submission must be given at least 10 points.',
                                        'Oops! A submission cannot be given more than 70 points.',
                                        'This is required.',
                                    ]}
                                    className={classes.pointInput}
                                    required
                                    autoFocus
                                    name='pic2Points'
                                    onChange={handleInputChange('pic2Points')}
                                    value={state.pic2Points}
                                    type='number'
                                />
                            </Grid>
                        </Grid>
                        <Grid container direction='row' justify='space-between' alignItems='center'>
                            <Button className={classes.orangeButton}>Back</Button>
                            <Button className={classes.orangeButton}>Next</Button>
                        </Grid>
                    </Grid>
                </Container>
            </ValidatorForm>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id='transition-modal-title'>Transition modal</h2>
                        <p id='transition-modal-description'>react-transition-group animates me.</p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export { PointDashboard };
