import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const emojiSelection = [
    '😀',
    '😃',
    '😄',
    '😁',
    '😆',
    '😅',
    '😂',
    '🙂',
    '🙃',
    '😉',
    '😇',
    '😋',
    '😜',
    '😝',
    '😐',
    '😑',
    '😶',
    '😏',
    '😒',
    '🙄',
    '😬',
    '😞',
    '😪',
    '😴',
    '😷',
    '😎',
    '😕',
    '😟',
    '🙁',
    '😮',
    '😯',
    '😲',
    '😳',
    '😦',
    '😧',
    '😰',
    '😥',
    '😢',
    '😭',
    '😱',
    '😖',
    '😣',
    '😩',
    '😫',
    '😤',
];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        emojiContainer: {
            'display': 'flex',
            'alignItems': 'center',
            'width': '300px',
            'height': '110px',
            'justifyContent': 'space-evenly',
            'flexWrap': 'wrap',
            'overflowY': 'auto',
            'overflowX': 'hidden',
            'marginBottom': '1%',
            'padding': '2%',
            'paddingRight': '3%',
            'position': 'relative',
            'background': 'rgba(255, 255, 255, 0.75)',
            'borderRadius': '5px',
            '&::-webkit-scrollbar': {
                width: '.8em',
            },
            '&::-webkit-scrollbar-track': {
                '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,.2)',
                outline: '1px solid grey',
                borderRadius: '10px',
            },
        },
        emojiDiv: {
            width: '30px',
            height: '40px',
            fontSize: '20px',
        },
        emojiButton: {
            border: '0px',
            background: 'none',
            outline: 'none',
            cursor: 'pointer',
        },
        inputDiv: {
            width: '299px',
            height: '30px',
            background: 'rgba(255, 255, 255, 0.75)',
            borderRadius: '5px',
            marginBottom: '3%',
            padding: '.8%',
            fontSize: '20px',
            paddingLeft: '7%',
        },
        emojiSpan: {
            letterSpacing: '18px',
        },
        clearCont: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
        clear: {
            fontFamily: 'nunito',
            height: '35px',
            borderRadius: '5%',
            cursor: 'pointer',
            textTransform: 'capitalize',
            fontSize: '1rem',
            border: '2px solid black',
            fontWeight: 'bold',
        },
    })
);

interface VotingStateProps {
    newEmoji: any;
    setNewEmoji: any;
    emojiCondit: any;
}

export const Emoji: React.FC<VotingStateProps> = ({ newEmoji, setNewEmoji, emojiCondit }) => {
    const classes = useStyles({});
    const [emojiInput, setEmojiInput] = React.useState([]);

    const handleChanges = (e) => {
        if (emojiInput.length < 6) {
            setEmojiInput([...emojiInput, e.target.value]);
        } else {
            return null;
        }
    };

    useEffect(() => {
        emojiCondit(emojiInput);
        // eslint-disable-next-line
    }, [emojiInput]);

    return (
        <div>
            <form>
                <div className={classes.inputDiv}>
                    <span className={classes.emojiSpan}>{emojiInput}</span>
                </div>
                <div className={classes.emojiContainer}>
                    {emojiSelection.map((emoji) => {
                        return (
                            <div className={classes.emojiDiv} key={emoji}>
                                <button
                                    className={classes.emojiButton}
                                    value={emoji}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleChanges(e);
                                    }}>
                                    {emoji}
                                </button>
                            </div>
                        );
                    })}
                </div>
                <div className={classes.clearCont}>
                    {emojiInput.length > 0 ? (
                        <Button
                            size='small'
                            variant='contained'
                            disableElevation
                            className={classes.clear}
                            onClick={() => {
                                setEmojiInput([]);
                            }}>
                            Clear
                        </Button>
                    ) : null}
                </div>
            </form>
        </div>
    );
};
