import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

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
                width: '.25em',
            },
            '&::-webkit-scrollbar-track': {
                '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,.2)',
                outline: '1px solid slategrey',
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
    })
);

interface VotingStateProps {
    newEmoji: any;
    setNewEmoji: any;
    emojiCondit: any;
    //emojiCondit: (arr: any) => void;
}

export const Emoji: React.FC<VotingStateProps> = ({ newEmoji, setNewEmoji, emojiCondit }) => {
    const classes = useStyles({});

    const delayState = () => {
        setTimeout(() => {
            emojiCondit(emojiInput);
        }, 1000);
    };

    const [emojiInput, setEmojiInput] = React.useState([]);

    const handleChanges = (e) => {
        if (emojiInput.length < 6) {
            setEmojiInput([...emojiInput, e.target.value]);
        } else {
            return null;
        }
    };
    // console.log('this is emoji state', emojiInput);

    useEffect(() => {
        emojiCondit(emojiInput);
        console.log('this is from the useEffect', newEmoji);
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
                <div>
                    {emojiInput.length > 0 ? (
                        <button
                            onClick={() => {
                                setEmojiInput([]);
                            }}>
                            Clear
                        </button>
                    ) : null}
                </div>
            </form>
        </div>
    );
};
