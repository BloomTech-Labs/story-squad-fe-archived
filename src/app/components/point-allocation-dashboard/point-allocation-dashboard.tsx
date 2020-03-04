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
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
} from '@material-ui/core';

import { Points } from '../../models';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Gecko from './img/gecko.jpg';
import Draw1 from './img/draw1.gif';
import Draw2 from './img/draw2.jpg';
import Draw3 from './img/draw3.jpg';
import Draw4 from './img/draw4.jpg';

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
const PointDashboard: React.FC = (props) => {
    const { state, handleInputChange, handleSubmitBuilder } = useForm({
        story1Points: 10,
        story2Points: 10,
        pic1Points: 10,
        pic2Points: 10,
    });
    const [remainingPoints, setRemainingPoints] = useState(60);
    const classes = useStyles({});
    const [open, setOpen] = React.useState(false);
    const [error, setError] = useState(false);
    const [draw2, setDraw2] = useState(false);
    const [draw3, setDraw3] = useState(false);
    const [draw4, setDraw4] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleDraw2 = () => {
        setDraw2(true);
    };
    const handleDraw3 = () => {
        setDraw3(true);
    };
    const handleDraw4 = () => {
        setDraw4(true);
    };

    const handleClose = () => {
        setOpen(false);
        setDraw2(false);
        setDraw3(false);
        setDraw4(false);
    };

    const handleError = () => {
        setError(false);
    };

    useEffect(() => {
        setRemainingPoints(
            100 - (state.story1Points + state.story2Points + state.pic1Points + state.pic2Points)
        );
    }, [state]);

    const handleSubmit = () => {
        if (remainingPoints === 0) {
            return console.log('Success!');
        } else {
            setError(true);
        }
    };

    return (
        <div>
            {/* Header code */}
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
            {/* End header code  */}
            {/* Container for avatars + inputs + buttons */}
            <ValidatorForm onSubmit={handleSubmit} onError={(errors) => console.log(errors)}>
                <Container className={classes.containerStyling}>
                    <Grid container spacing={1}>
                        {/* Row 1 */}
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
                                {/* Avatar 1 */}
                                <Avatar src='./gecko.jpg' className={classes.avatarStyling} />
                                {/* Username 1 */}
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
                                {/* Story 1 Preview */}
                                <img
                                    src={Draw1}
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
                                {/* Drawing 1 preview */}
                                <img
                                    src={Draw2}
                                    className={classes.imagePreview}
                                    onClick={handleDraw2}
                                />
                            </Grid>
                        </Grid>
                        {/* Row 2 */}
                        <Grid container direction='row' justify='center' alignItems='center'>
                            {/* This Grid is empty to keep the grid spacing the same */}
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
                                {/* Story 1 input */}
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
                                    InputProps={{ inputProps: { min: 10, max: 70 } }}
                                    variant='outlined'
                                />
                            </Grid>
                            <Grid
                                container
                                item
                                justify='center'
                                sm={4}
                                spacing={1}
                                className={classes.gridMargin}>
                                {/* Drawing 1 input */}
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
                                    variant='outlined'
                                    InputProps={{ inputProps: { min: 10, max: 70 } }}
                                />
                            </Grid>
                        </Grid>
                        {/* Row 3 */}
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
                                {/* Avatar 2 */}
                                <Avatar src='./gecko.jpg' className={classes.avatarStyling} />
                                {/* Username 2 */}
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
                                {/* Story 2 Preview */}
                                <img
                                    src={Draw3}
                                    className={classes.imagePreview}
                                    onClick={handleDraw3}
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
                                {/* Drawing 2 Preview */}
                                <img
                                    src={Draw4}
                                    className={classes.imagePreview}
                                    onClick={handleDraw4}
                                />
                            </Grid>
                        </Grid>
                        {/* Row 4 */}
                        <Grid container direction='row' justify='center' alignItems='center'>
                            {/* This Grid is empty to keep the grid spacing the same */}
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
                                {/* Story 2 Input */}
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
                                    InputProps={{ inputProps: { min: 10, max: 70 } }}
                                    variant='outlined'
                                />
                            </Grid>
                            <Grid
                                container
                                item
                                justify='center'
                                sm={4}
                                spacing={1}
                                className={classes.gridMargin}>
                                {/* Drawing 2 Input */}
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
                                    variant='outlined'
                                />
                            </Grid>
                        </Grid>
                        {/* Row 5 */}
                        <Grid container direction='row' justify='space-between' alignItems='center'>
                            {/* Back and next buttons  */}
                            <Link to={`/dashboard`}>
                                <Button className={classes.orangeButton} type='button'>
                                    Back
                                </Button>
                            </Link>
                            <Button className={classes.orangeButton} type='submit'>
                                Next
                            </Button>
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
                        <img src={Draw1} />
                        <h2 id='transition-modal-title'>Placeholder Image</h2>
                    </div>
                </Fade>
            </Modal>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                className={classes.modal}
                open={draw2}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={draw2}>
                    <div className={classes.paper}>
                        <img src={Draw2} />
                        <h2 id='transition-modal-title'>Placeholder Image</h2>
                    </div>
                </Fade>
            </Modal>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                className={classes.modal}
                open={draw3}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={draw3}>
                    <div className={classes.paper}>
                        <img src={Draw3} />
                        <h2 id='transition-modal-title'>Placeholder Image</h2>
                    </div>
                </Fade>
            </Modal>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                className={classes.modal}
                open={draw4}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={draw4}>
                    <div className={classes.paper}>
                        <img src={Draw4} />
                        <h2 id='transition-modal-title'>Placeholder Image</h2>
                    </div>
                </Fade>
            </Modal>
            <Dialog
                open={error}
                onClose={handleError}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'>
                <DialogContent>
                    <DialogContentText id='alert-dialog-description' style={{ color: 'red' }}>
                        Whoopsies! It seems you haven't allocated 100 points. Please allocate 100
                        points between all four entries. After that, you can move on to the next
                        step!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleError} color='primary' autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export { PointDashboard };
