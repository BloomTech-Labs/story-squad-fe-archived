import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import 'typeface-nunito';
import { useStyles } from './voting-styles';
import { Button, Typography, Container, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import { Child, Cohort } from '../../models';
// import story1 from './img/leowriting.jpg';
// import story2 from './img/chancewriting.jpg';
import { useForm } from '../../hooks';
import { VotingModal } from './modal/modal-image';
import { Emoji } from './emoji/Emoji.component';
import { Popup } from '../voting/popup-alert/Popup.alert';
import { VotingHeader } from './votingHeader/voting-header';
import { useAPI } from '../../hooks';

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
}

const Voting: React.FC<VotingCardProps> = ({ child }) => {
    const [response] = useAPI(`/votingRoutes/voting`, 'GET', false);
    const [postResponse, loading, request] = useAPI(`/votingRoutes/voting`, 'POST');
    console.log('response', response);
    // const { state, handleInputChange, handleSubmitBuilder } = useForm({
    //     story1Points: 'something',
    //     story2Points: 'something',
    //     pic1Points: 'something',
    //     pic2Points: 'something',
    // });

    const [dummyData, setDummyData] = useState({ dummy: 'data' });
    const [selectedValue, setSelectedValue] = React.useState<number>();
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
        setSelectedValue(Number(event.target.value));
    };

    const handleSubmit = () => {
        const vote = { matchupID: response?.matchupID, childID: selectedValue };
        console.log('vote data', vote);
        if (newEmoji.player1.length < 4 || newEmoji.player2.length < 4) {
            setOpen(true);
        } else {
            console.log('submitted successfully');
            request(vote);
        }
        // history.push
    };

    // console.log('this is the object', newEmoji);
    // console.log('selected value', selectedValue);

    return (
        <Container className={classes.containerStyling}>
            <VotingHeader />
            <Grid className={classes.topRow}>
                <Grid className={classes.story1}>
                    <div className={classes.playerSelection}>
                        <p>{'ID:' + response?.child1.id}</p>
                        <VotingModal
                            key='pic1Points'
                            // username={dummyData.dummy}
                            submission={
                                response?.child1.story
                                    ? response?.child1.story.page1
                                    : response?.child1.illustration
                            }
                            type='Illustration'
                            // points={state.pic1Points}
                            response={response}
                        />
                        <ColoredRadio
                            className={classes.radioBox}
                            checked={selectedValue == response?.child1.id}
                            onChange={handleChange}
                            value={response?.child1.id}
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
                        <p>{'ID:' + response?.child2.id}</p>
                        <VotingModal
                            key='pic1Points'
                            // username={dummyData.dummy}
                            submission={
                                response?.child2.story
                                    ? response?.child2.story.page1
                                    : response?.child2.illustration
                            }
                            type='Illustration'
                            // points={state.pic1Points}
                            response={response}
                        />
                        <ColoredRadio
                            className={classes.radioBox}
                            checked={selectedValue == response?.child2.id}
                            onChange={handleChange}
                            value={response?.child2.id}
                            name='storyB'
                            inputProps={{ 'aria-label': 'B' }}
                            disableRipple={true}
                        />
                        <Emoji
                            emojiCondit={emojiSelector2}
                            newEmoji={newEmoji.player2}
                            setNewEmoji={setNewEmoji}
                        />
                        <div className={classes.button}>
                            <Button
                                className={classes.orangeButton}
                                onClick={handleSubmit}
                                disabled={selectedValue ? false : true}>
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
