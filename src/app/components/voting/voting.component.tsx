import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import 'typeface-nunito';
import { useStyles } from './voting-styles';
import { Button, Typography, Container, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import story1 from './img/leowriting.jpg';
import story2 from './img/chancewriting.jpg';
import { useForm } from '../../hooks';
import { VotingModal } from './modal/modal-image';
import { Emoji } from './emoji/Emoji.component';
import { Popup } from '../voting/popup-alert/Popup.alert';
import { VotingHeader } from './votingHeader/voting-header';

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
    handleChange: any;
}

const Voting: React.FC<VotingCardProps> = () => {
    const { state, handleInputChange, handleSubmitBuilder } = useForm({
        story1Points: 'something',
        story2Points: 'something',
        pic1Points: 'something',
        pic2Points: 'something',
    });

    const [dummyData, setDummyData] = useState({ dummy: 'data' });
    const [selectedValue, setSelectedValue] = React.useState('a');
    const [open, setOpen] = React.useState(false);
    const [newEmoji, setNewEmoji] = React.useState({
        player1: [],
        player2: [],
    });
    const classes = useStyles({});

    const emojiSelector1 = (arr) => {
        setNewEmoji({ ...newEmoji, player1: arr });
    };

    const emojiSelector2 = (arr) => {
        setNewEmoji({ ...newEmoji, player2: arr });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    const handleSubmit = () => {
        if (newEmoji.player1.length < 4 || newEmoji.player2.length < 4) {
            setOpen(true);
        } else {
            console.log('submitted successfully');
        }
        // post endpoint
        // clear newEmoji state
        // history.push
    };

    console.log('this is the object', newEmoji);

    return (
        <Container className={classes.containerStyling}>
            <VotingHeader />
            <Grid className={classes.topRow}>
                <Grid className={classes.story1}>
                    <div className={classes.playerSelection}>
                        <VotingModal
                            key='pic1Points'
                            username={dummyData.dummy}
                            submission={story1}
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
                        <Emoji
                            emojiCondit={emojiSelector1}
                            newEmoji={newEmoji.player1}
                            setNewEmoji={setNewEmoji}
                        />
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
                        <Emoji
                            emojiCondit={emojiSelector2}
                            newEmoji={newEmoji.player2}
                            setNewEmoji={setNewEmoji}
                        />
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
