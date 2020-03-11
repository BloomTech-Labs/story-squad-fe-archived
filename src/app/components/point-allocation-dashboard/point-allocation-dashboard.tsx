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
} from '@material-ui/core';
import { Child } from '../../models';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Draw1 from './img/draw1.gif';
import Draw2 from './img/draw2.jpg';
import Draw3 from './img/draw3.jpg';
import Draw4 from './img/draw4.jpg';
import ava1 from './img/cam.png';
import ava2 from './img/other.png';
import cityscape from '../child-dashboard/kid-progress/icons/cityscape.png';
import splode from './img/splode.png';

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
            display: 'flex',
            flexDirection: 'column',
            marginTop: '0px',
            padding: '0px',
        },
        gridRow1: {
            height: '274px',
            backgroundColor: '#EB7D5B',
            paddingTop: '32px',
            padding: '30px',
            borderTop: '7px solid #000000',
            borderLeft: '14px solid #000000',
        },
        gridRow2: {
            height: '274px',
            backgroundColor: '#EB7D5B',
            paddingTop: '32px',
            padding: '30px',
            borderTop: '7px solid #000000',
            borderRight: '14px solid #000000',
        },
        gridRow3: {
            height: '274px',
            backgroundColor: '#FED23F',
            paddingTop: '32px',
            padding: '30px',
            borderTop: '7px solid #000000',
            borderLeft: '14px solid #000000',
        },
        gridRow4: {
            height: '274px',
            backgroundColor: '#FED23F',
            paddingTop: '32px',
            padding: '30px',
            borderTop: '7px solid #000000',
            borderRight: '14px solid #000000',
        },
        gridInput1: {
            backgroundColor: '#EB7D5B',
            padding: '53px ',
            borderLeft: '14px solid #000000',
            borderBottom: '5px solid #000000',
        },
        gridInput2: {
            backgroundColor: '#EB7D5B',
            padding: '53px ',
            borderRight: '14px solid #000000',
            borderBottom: '5px solid #000000',
        },
        gridInput3: {
            backgroundColor: '#FED23F',
            padding: '50px ',
            borderLeft: '14px solid #000000',
            borderBottom: '14px solid #000000',
        },
        gridInput4: {
            backgroundColor: '#FED23F',
            padding: '50px ',
            borderRight: '14px solid #000000',
            borderBottom: '14px solid #000000',
        },
        avatarMargin: {
            fontFamily: 'nunito',
            fontSize: '18px',
            fontWeight: 'bold',
            backgroundColor: '#B5D33D',
            padding: '6px',
            borderLeft: '14px solid #000000',
            borderTop: '7px solid #000000',
        },
        avatarMargin2: {
            fontFamily: 'nunito',
            fontSize: '18px',
            fontWeight: 'bold',
            backgroundColor: '#B5D33D',
            padding: '10px 9px 9px 9px',
            borderLeft: '14px solid #000000',
        },
        avatarMargin3: {
            backgroundColor: '#B5D33D',
            padding: '55px 55px 45px 55px',
            borderLeft: '14px solid #000000',
            borderBottom: '14px solid #000000',
        },
        avatarMargin4: {
            backgroundColor: '#B5D33D',
            padding: '61px 55px 50px 55px',
            borderLeft: '14px solid #000000',
        },
        orangeButton: {
            'marginTop': '40px',
            'marginBottom': '40px',
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
            fontFamily: 'Bangers',
            fontSize: '48px',
            fontWeight: 'bold',
        },
        imagePreview: {
            width: '250px',
            height: '125px',
            borderRadius: '14px',
        },
        containerStyling: {
            fontFamily: 'nunito',
            marginTop: '8px',
        },
        h2Styling: {
            'fontFamily': 'Bangers',
            'color': '#FFFFFF',
            'fontSize': '86px',
            'fontWeight': 'bold',
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': '#000000',
        },
        h3Styling: {
            'fontFamily': 'Bangers',
            'color': '#FFFFFF',
            'fontSize': '48px',
            'fontWeight': 'bold',
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': '#000000',
        },
        avatarStyling: {
            marginTop: '25px',
            width: '215px',
            height: '180px',
            backgroundImage: `url(${splode})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '101% 103%',
        },
        red: {
            color: 'red',
        },
        appBar: {
            height: '229px',
            width: '100%',
            backgroundColor: '#6CEAE6',
            backgroundImage: `url(${cityscape})`,
            backgroundRepeat: 'no-repeat',
            border: '7px solid #000000',
            backgroundSize: '101% 103%',
            display: 'flex',
            justifyContent: 'center',
        },
        headerFont: {
            'fontFamily': 'Bangers',
            'fontSize': '48px',
            'fontWeight': 'bold',
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': '#ff6d3a',
        },
    })
);
interface PointCardProps {
    className?: string;
    child: Child;
}
const PointDashboard: React.FC<PointCardProps> = ({ className, child }) => {
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
    console.log(child);

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
            {/* Container for avatars + inputs + buttons */}
            <ValidatorForm onSubmit={handleSubmit} onError={(errors) => console.log(errors)}>
                <Container className={classes.containerStyling}>
                    <Grid container>
                        {/* Header code */}
                        <Grid container direction='row' className={classes.appBar}>
                            <Grid container item justify='space-around' alignItems='center'>
                                <Typography className={classes.h2Styling} variant='h2'>
                                    Point Share
                                </Typography>
                                <Typography className={classes.h3Styling} variant='h3'>
                                    Total Points Remaining:
                                    {remainingPoints < 0 || remainingPoints > 100 ? (
                                        <div className={classes.red}>Total must equal 100</div>
                                    ) : (
                                        <div>{remainingPoints}</div>
                                    )}
                                </Typography>
                            </Grid>
                        </Grid>
                        {/* End header code  */}
                        {/* Row 1 */}
                        <Grid container direction='row' justify='center' alignItems='center'>
                            <Grid
                                container
                                item
                                justify='center'
                                direction='column'
                                alignItems='center'
                                sm={4}
                                className={classes.avatarMargin}>
                                {/* Avatar 1 */}
                                <img src={ava1} className={classes.avatarStyling} />
                                {/* Username 1 */}
                                <>
                                    <br />
                                    {child.username}
                                </>
                            </Grid>
                            <Grid
                                container
                                item
                                justify='center'
                                alignItems='center'
                                sm={4}
                                className={classes.gridRow1}>
                                {/* Story 1 Preview */}
                                <img
                                    src={Draw1}
                                    className={classes.imagePreview}
                                    onClick={handleOpen}
                                    alt='childs drawing of family'
                                />
                            </Grid>
                            <Grid
                                container
                                item
                                justify='center'
                                alignItems='center'
                                sm={4}
                                className={classes.gridRow2}>
                                {/* Drawing 1 preview */}
                                <img
                                    src={Draw2}
                                    className={classes.imagePreview}
                                    onClick={handleDraw2}
                                    alt='childs drawing of family'
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
                                className={classes.avatarMargin4}></Grid>
                            <Grid
                                container
                                item
                                justify='center'
                                sm={4}
                                className={classes.gridInput1}>
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
                                    style={{
                                        position: 'absolute',
                                        top: '451px',
                                        background: 'white',
                                        width: '145px',
                                        borderRadius: '5px',
                                    }}
                                    variant='outlined'
                                />
                            </Grid>
                            <Grid
                                container
                                item
                                justify='center'
                                sm={4}
                                className={classes.gridInput2}>
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
                                    style={{
                                        position: 'absolute',
                                        top: '451px',
                                        background: 'white',
                                        width: '145px',
                                        borderRadius: '5px',
                                    }}
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
                                className={classes.avatarMargin2}>
                                {/* Avatar 2 */}
                                <img src={ava2} className={classes.avatarStyling} />
                                {/* Username 2 */}
                                <>
                                    <br />
                                    Teammate
                                </>
                            </Grid>
                            <Grid
                                container
                                item
                                justify='center'
                                alignItems='center'
                                sm={4}
                                className={classes.gridRow3}>
                                {/* Story 2 Preview */}
                                <img
                                    src={Draw3}
                                    className={classes.imagePreview}
                                    onClick={handleDraw3}
                                    alt='childs drawing of family'
                                />
                            </Grid>
                            <Grid
                                container
                                item
                                justify='center'
                                alignItems='center'
                                sm={4}
                                className={classes.gridRow4}>
                                {/* Drawing 2 Preview */}
                                <img
                                    src={Draw4}
                                    className={classes.imagePreview}
                                    onClick={handleDraw4}
                                    alt='childs drawing of random shapes'
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
                                className={classes.avatarMargin3}></Grid>
                            <Grid
                                container
                                item
                                justify='center'
                                sm={4}
                                className={classes.gridInput3}>
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
                                    style={{
                                        position: 'absolute',
                                        top: '833px',
                                        background: 'white',
                                        width: '145px',
                                        borderRadius: '5px',
                                    }}
                                />
                            </Grid>
                            <Grid
                                container
                                item
                                justify='center'
                                sm={4}
                                className={classes.gridInput4}>
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
                                    style={{
                                        position: 'absolute',
                                        top: '833px',
                                        background: 'white',
                                        width: '145px',
                                        borderRadius: '5px',
                                    }}
                                />
                            </Grid>
                        </Grid>
                        {/* Row 5 */}
                        <Grid container direction='row' justify='space-between' alignItems='center'>
                            {/* Back and next buttons  */}
                            <Link to={`/kids-dashboard`}>
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
                        <img src={Draw1} alt='childs drawing of family' />
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
                        <img src={Draw2} alt='childs drawing of family' />
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
                        <img src={Draw3} alt='childs drawing of family' />
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
                        <img src={Draw4} alt='childs drawing of random shapes' />
                        <h2 id='transition-modal-title'>Placeholder Image</h2>
                    </div>
                </Fade>
            </Modal>
            <Dialog
                open={error}
                onClose={handleClose}
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
                    <Button onClick={handleClose} color='primary' autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export { PointDashboard };
