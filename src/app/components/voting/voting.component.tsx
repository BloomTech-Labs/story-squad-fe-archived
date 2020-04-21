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
import { VotingModal } from './modal/modal-image';
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

const Voting: React.FC<VotingCardProps> = ({ child }) => {
    const [selectedValue, setSelectedValue] = React.useState('a');
    const classes = useStyles({});
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
        </Container>
    );
};

export { Voting };