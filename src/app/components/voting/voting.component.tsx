import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import 'typeface-nunito';
import { useStyles } from './voting-styles';
import { Button, Typography, Container, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import { Child, Cohort } from '../../models';
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
    const history = useHistory();
    const [response] = useAPI(`/votingRoutes/voting`, 'GET', false);
    const [postResponse, loading, request] = useAPI(`/votingRoutes/voting`, 'POST');
    const [dummyData, setDummyData] = useState({ dummy: 'data' });
    const [selectedValue, setSelectedValue] = React.useState<number>();
    const [open, setOpen] = React.useState(false);
    const [openInst, setInst] = React.useState(false);
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
        const emojiObj = {};
        emojiObj[response?.child1.childId] = newEmoji.player1;
        emojiObj[response?.child2.childId] = newEmoji.player2;
        const vote = { matchupID: response?.matchupID, childID: selectedValue, emojiObj };
        // console.log('vote data', vote);
        if (newEmoji.player1.length < 4 || newEmoji.player2.length < 4) {
            setOpen(true);
        } else {
            console.log('submitted successfully');
            request(vote);
            history.push('/matchup');
        }
    };

    const justBoolin = (bigBOOL) => {
        setInst(bigBOOL);
        if (!bigBOOL) window.localStorage.setItem('visited', '1');
    };

    useEffect(() => {
        const check = window.localStorage.getItem('visited') !== '1';
        if (check) setInst(true);
    }, []);

    const submissionCheck = (submission) =>
        typeof submission === 'string' ? [submission] : Object.values(submission);
    return (
        <Container className={classes.containerStyling}>
            {response && (
                <>
                    <Popup
                        open={openInst}
                        setOpen={justBoolin}
                        dialogTxt={
                            'Other players’ fates are in your hands! Help decide the winner by voting for the story and picture you think should win. Then leave an emoji comment for each author!'
                        }
                        btnTxt={'OK'}
                    />
                    <VotingHeader
                        submissionType={response?.child1.story ? 'Story' : 'Illustration'}
                        setInst={setInst}
                    />
                    <Grid className={classes.topRow}>
                        <Grid className={classes.story1}>
                            <div className={classes.playerSelection}>
                                <VotingModal
                                    key='pic1Points'
                                    submission={submissionCheck(
                                        response?.child1.story
                                            ? response?.child1.story
                                            : response?.child1.illustration
                                    )}
                                    type='Illustration'
                                    response={response}
                                />
                                <ColoredRadio
                                    className={classes.radioBox}
                                    checked={selectedValue === response?.child1.childId}
                                    onChange={handleChange}
                                    value={response?.child1.childId}
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
                                    submission={submissionCheck(
                                        response?.child2.story
                                            ? response?.child2.story
                                            : response?.child2.illustration
                                    )}
                                    type='Illustration'
                                    response={response}
                                />
                                <ColoredRadio
                                    className={classes.radioBox}
                                    checked={selectedValue === response?.child2.childId}
                                    onChange={handleChange}
                                    value={response?.child2.childId}
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
                                        disabled={!selectedValue}>
                                        Submit
                                    </Button>
                                </div>
                            </div>
                            <Popup
                                open={open}
                                setOpen={setOpen}
                                dialogTxt={'Oops! Please select 4-6 emojis for each player'}
                                btnTxt={'Go Back'}
                            />
                        </Grid>
                    </Grid>
                </>
            )}
        </Container>
    );
};

export { Voting };
