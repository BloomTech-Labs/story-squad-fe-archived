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
import { withStyles } from '@material-ui/core/styles';
import { blue, red, green } from '@material-ui/core/colors';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import { Child, Cohort } from '../../models';
import story1 from './img/leowriting.jpg';
import story2 from './img/chancewriting.jpg';
const ColoredRadio = withStyles({
    root: {
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props: RadioProps) => <Radio color='default' {...props} />);

interface VotingCardProps {
    child: Child;
}

// function rand() {
//     return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//     const top = 50 + rand();
//     const left = 50 + rand();

//     return {
//         top: `${top}%`,
//         left: `${left}%`,
//         transform: `translate(-${top}%, -${left}%)`,
//     };
// }

// const [modalStyle] = React.useState(getModalStyle);
// const [open, setOpen] = React.useState(false);

// const handleOpen = () => {
//     setOpen(true);
// };

// const handleClose = () => {
//     setOpen(false);
// };

const Voting: React.FC<VotingCardProps> = ({ child }) => {
    const [selectedValue, setSelectedValue] = React.useState('a');
    const classes = useStyles({});
    // const body = (
    // <div style={modalStyle} className={classes.imgModal}>
    //     <h2 id="simple-modal-title">Text in a modal</h2>
    //     <p id="simple-modal-description">
    //     Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    //     </p>
    // </div>
    // );
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };
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
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.topRow}>
                <Grid className={classes.story1}>
                    Side 1
                    <div className={classes.playerSelection}>
                        <img className={classes.storyPic} src={story1} alt='story' />
                        <ColoredRadio
                            className={classes.radioBox}
                            checked={selectedValue === 'a'}
                            onChange={handleChange}
                            value='a'
                            name='storyA'
                            inputProps={{ 'aria-label': 'A' }}
                        />
                    </div>
                </Grid>
                <Grid className={classes.story2}>
                    Side 2
                    <div className={classes.playerSelection}>
                        <img className={classes.storyPic} src={story2} alt='story' />
                        <ColoredRadio
                            className={classes.radioBox}
                            checked={selectedValue === 'b'}
                            onChange={handleChange}
                            value='b'
                            name='storyB'
                            inputProps={{ 'aria-label': 'B' }}
                        />
                    </div>
                    <Grid container xs={8} className={classes.submitDiv}>
                        <Grid item xs={6} />
                        <Grid item xs={6}>
                            <div className={classes.button}>
                                <Button className={classes.orangeButton} type='submit'>
                                    Submit
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* <div>
                <button type="button" onClick={handleOpen}>
                    Open Modal
                </button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
                </Modal>
            </div> */}
        </Container>
    );
};

export { Voting };
