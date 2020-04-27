import React, { useState, useEffect } from 'react';
import 'typeface-nunito';
import { useStyles } from './voting-styles';
import { Button, Typography, Container, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import { Child, Cohort } from '../../models';
import story1 from './img/leowriting.jpg';
import story2 from './img/chancewriting.jpg';
import { useForm } from '../../hooks';
import { VotingModal } from './modal/modal-image';
import { Emoji } from './emoji/Emoji.component';
import { Popup } from '../voting/popup-alert/Popup.alert';

const ColoredRadio = withStyles({
    root: {
        '&$checked': {
            color: '#FFFFFF',
        },
        '&&:hover': {
            backgroundColor: 'transparent',
        },
    },
    checked: {},
})((props: RadioProps) => <Radio color='default' {...props} />);

interface VotingCardProps {
    child: Child;
    handleChange: any;
    open: boolean;
    setOpen: any;
}

const Voting: React.FC<VotingCardProps> = ({ child }) => {
    const { state, handleInputChange, handleSubmitBuilder } = useForm({
        story1Points: 'something',
        story2Points: 'something',
        pic1Points: 'something',
        pic2Points: 'something',
    });
    const [dummyData, setDummyData] = useState({ dummy: 'data' });
    const [selectedValue, setSelectedValue] = React.useState('a');
    const [open, setOpen] = React.useState(false);
    const classes = useStyles({});
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    const handleSubmit = () => {
        // if less than 4
        setOpen(true);
        // else
        // post endpoint
        // history.push
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
                        <Typography className={classes.h3Styling} variant='h2'>
                            Vote For Your Favorite Story
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.topRow}>
                <Grid className={classes.story1}>
                    <div className={classes.playerSelection}>
                        <VotingModal
                            key='pic1Points'
                            username={dummyData.dummy}
                            submission={story2}
                            type='Illustration'
                            points={state.pic1Points}
                        />
                        <ColoredRadio
                            className={classes.radioBox}
                            checked={selectedValue === 'a'}
                            onChange={handleChange}
                            value='a'
                            name='storyA'
                            inputProps={{ 'aria-label': 'A' }}
                            disableRipple={true}
                        />
                        <Emoji />
                    </div>
                </Grid>
                <Grid className={classes.story2}>
                    <div className={classes.playerSelection}>
                        <VotingModal
                            key='pic1Points'
                            username={dummyData.dummy}
                            submission={story2}
                            type='Illustration'
                            points={state.pic1Points}
                        />
                        <ColoredRadio
                            className={classes.radioBox}
                            checked={selectedValue === 'b'}
                            onChange={handleChange}
                            value='b'
                            name='storyB'
                            inputProps={{ 'aria-label': 'B' }}
                            disableRipple={true}
                        />
                        <Emoji />
                        {/* <Grid container xs={8} className={classes.submitDiv}>
                            <Grid item xs={6} />
                            <Grid item xs={6}> */}
                        {/* </Grid>
                        </Grid> */}
                        <div className={classes.button}>
                            <Button className={classes.orangeButton} onClick={handleSubmit}>
                                Submit
                            </Button>
                        </div>
                    </div>
                    <Popup open={open} setOpen={setOpen} />
                </Grid>
            </Grid>
        </Container>
    );
};

export { Voting };
