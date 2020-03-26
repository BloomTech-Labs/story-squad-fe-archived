import React, { useState, useEffect } from 'react';
import 'typeface-nunito';
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
} from '@material-ui/core';
import { Child } from '../../models';
import { Link } from 'react-router-dom';
import { useForm, useAPI } from '../../hooks';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import ava1 from './img/cam.png';
import ava2 from './img/Hero13.png';
import { useStyles } from './styles';

interface PointCardProps {
    child: Child;
}

const PointDashboard: React.FC<PointCardProps> = ({ child }) => {
    const [matchInfo] = useAPI(`/battlesRoutes/battles`, 'GET', false);
    const [points, updating, updatePoints] = useAPI(`/battlesRoutes/battles`, 'PUT');
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
    const [thisMatch, setThisMatch] = useState();
    const [student, setStudent] = useState();
    const [teammate, setTeammate] = useState();

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

    useEffect(() => {
        if (matchInfo) {
            setThisMatch({ ...matchInfo.thisMatch });
            setStudent({ ...matchInfo.thisMatch.team.student });
            setTeammate({ ...matchInfo.thisMatch.team.teammate });
            return console.log('inside', thisMatch);
        }
    }, [matchInfo]);

    const handleSubmit = () => {
        if (remainingPoints === 0 && child.progress.teamReview === false) {
            updatePoints({
                story1id: student.story.id,
                story1Points: state.story1Points,
                story2id: teammate.story.id,
                story2Points: state.story2Points,
                pic1id: student.illustration.id,
                pic1Points: state.pic1Points,
                pic2id: teammate.illustration.id,
                pic2Points: state.pic2Points,
            });
            return console.log('Success!');
        } else {
            setError(true);
        }
    };

    return (
        <div>
            {/* Container for avatars + inputs + buttons */}
            {student === undefined || teammate === undefined ? (
                <div>
                    <CircularProgress />
                </div>
            ) : (
                <>
                    <ValidatorForm
                        onSubmit={handleSubmit}
                        onError={(errors) => console.log(errors)}>
                        <Container className={classes.containerStyling}>
                            <Grid container>
                                {/* Header code */}
                                <Grid container direction='row' className={classes.appBar}>
                                    <Grid container item justify='space-around' alignItems='center'>
                                        <Typography className={classes.h2Styling} variant='h2'>
                                            Point Share
                                        </Typography>
                                        <Typography className={classes.h3Styling}>
                                            Total Points Remaining:
                                            {remainingPoints < 0 || remainingPoints > 100 ? (
                                                <div className={classes.red}>
                                                    Total must equal 100
                                                </div>
                                            ) : (
                                                <div>{remainingPoints}</div>
                                            )}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                {/* End header code  */}
                                {/* Row 1 */}
                                <Grid
                                    container
                                    direction='row'
                                    justify='center'
                                    alignItems='center'>
                                    <Grid
                                        container
                                        item
                                        justify='center'
                                        direction='column'
                                        alignItems='center'
                                        sm={4}
                                        className={classes.avatarMargin}>
                                        {/* Avatar 1 */}
                                        <img
                                            src={ava1}
                                            className={classes.avatarStyling}
                                            alt='child avatar'
                                        />
                                        {/* Username 1 */}
                                        <>
                                            <br />
                                            <p className={classes.username1}>{student.username}</p>
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
                                            src={student.story.story.page1}
                                            className={classes.imagePreview}
                                            onClick={handleOpen}
                                            alt={`${student.username}'s story`}
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
                                            src={student.illustration.illustration}
                                            alt={`${student.username}'s drawing`}
                                            className={classes.imagePreview}
                                            onClick={handleDraw2}
                                        />
                                    </Grid>
                                </Grid>
                                {/* Row 2 */}
                                <Grid
                                    container
                                    direction='row'
                                    justify='center'
                                    alignItems='center'>
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
                                            validators={[
                                                'minNumber:10',
                                                'maxNumber:70',
                                                'required',
                                            ]}
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
                                                top: '431px',
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
                                            validators={[
                                                'minNumber:10',
                                                'maxNumber:70',
                                                'required',
                                            ]}
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
                                                top: '431px',
                                                background: 'white',
                                                width: '145px',
                                                borderRadius: '5px',
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                                {/* Row 3 */}
                                <Grid
                                    container
                                    direction='row'
                                    justify='center'
                                    alignItems='center'>
                                    <Grid
                                        container
                                        item
                                        justify='center'
                                        direction='column'
                                        alignItems='center'
                                        sm={4}
                                        className={classes.avatarMargin2}>
                                        {/* Avatar 2 */}
                                        <img
                                            src={ava2}
                                            className={classes.avatarStyling}
                                            alt='child avatar'
                                        />
                                        {/* Username 2 */}
                                        <>
                                            <br />
                                            <p className={classes.username2}>{teammate.username}</p>
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
                                            src={teammate.story.story.page1}
                                            className={classes.imagePreview}
                                            onClick={handleDraw3}
                                            alt={`${teammate.username}'s story`}
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
                                            src={teammate.illustration.illustration}
                                            className={classes.imagePreview}
                                            onClick={handleDraw4}
                                            alt={`${teammate.username}'s illustration`}
                                        />
                                    </Grid>
                                </Grid>
                                {/* Row 4 */}
                                <Grid
                                    container
                                    direction='row'
                                    justify='center'
                                    alignItems='center'>
                                    {/* This Grid is empty to keep the grid spacing the same */}
                                    <Grid
                                        container
                                        item
                                        justify='center'
                                        sm={4}
                                        className={classes.avatarMargin3}>
                                        {' '}
                                        <Link to={`/kids-dashboard`}>
                                            <Button className={classes.orangeButton} type='button'>
                                                Back
                                            </Button>
                                        </Link>
                                    </Grid>
                                    <Grid
                                        container
                                        item
                                        justify='center'
                                        sm={4}
                                        className={classes.gridInput3}>
                                        {/* Story 2 Input */}
                                        <TextValidator
                                            validators={[
                                                'minNumber:10',
                                                'maxNumber:70',
                                                'required',
                                            ]}
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
                                                top: '813px',
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
                                            validators={[
                                                'minNumber:10',
                                                'maxNumber:70',
                                                'required',
                                            ]}
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
                                                top: '813px',
                                                background: 'white',
                                                width: '145px',
                                                borderRadius: '5px',
                                            }}
                                        />
                                        <Button className={classes.orangeButton} type='submit'>
                                            Next
                                        </Button>
                                    </Grid>
                                </Grid>
                                {/* Row 5 */}
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
                                <img
                                    src={student.story.story.page1}
                                    alt={`${student.username}'s story`}
                                />
                                <h2 id='transition-modal-title'>{student.username}'s Story</h2>
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
                                <img
                                    src={student.illustration.illustration}
                                    alt={`${student.username}'s illustration`}
                                />
                                <h2 id='transition-modal-title'>
                                    {student.username}'s Illustration
                                </h2>
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
                        <Fade in={draw2}>
                            <div className={classes.paper}>
                                <img
                                    src={student.illustration.illustration}
                                    alt={`${student.username}'s illustration`}
                                />
                                <h2 id='transition-modal-title'>
                                    {student.username}'s Illustration
                                </h2>
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
                                <img
                                    src={teammate.story.story.page1}
                                    alt={`${teammate.username}'s Story`}
                                />
                                <h2 id='transition-modal-title'>{teammate.username}'s Story</h2>
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
                                <img
                                    src={teammate.illustration.illustration}
                                    alt={`${teammate.username}'s Illustration`}
                                />
                                <h2 id='transition-modal-title'>
                                    {teammate.username}'s Illustration
                                </h2>
                            </div>
                        </Fade>
                    </Modal>
                    <Dialog
                        open={error}
                        onClose={handleClose}
                        aria-labelledby='alert-dialog-title'
                        aria-describedby='alert-dialog-description'>
                        <DialogContent>
                            <DialogContentText
                                id='alert-dialog-description'
                                style={{ color: 'red' }}>
                                Whoopsies! It seems you haven't allocated 100 points. Please
                                allocate 100 points between all four entries. After that, you can
                                move on to the next step!
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color='primary' autoFocus>
                                OK
                            </Button>
                        </DialogActions>
                    </Dialog>
                </>
            )}
        </div>
    );
};

export { PointDashboard };
