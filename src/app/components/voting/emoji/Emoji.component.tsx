import React from 'react';
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

export const Emoji: React.FC = () => {
    const classes = useStyles({});
    const [newEmoji, setNewEmoji] = React.useState([]);

    const handleChanges = (e) => {
        if (newEmoji.length < 6) {
            setNewEmoji([...newEmoji, e.target.value]);
        } else {
            return null;
        }
    };
    // console.log('this is state', newEmoji);
    const handleSubmit = (e) => {
        e.preventDefault();
        setNewEmoji([]);
        // console.log('this is the submission', newEmoji);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={classes.inputDiv}>
                    <span className={classes.emojiSpan}>{newEmoji}</span>
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
                                    }}
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                    }}>
                                    {emoji}
                                </button>
                            </div>
                        );
                    })}
                </div>
                <div>
                    {/* {newEmoji.length >= 4 ? <button type='submit'>Send</button> : null} */}
                    {newEmoji.length > 0 ? (
                        <button
                            onClick={() => {
                                setNewEmoji([]);
                            }}>
                            Clear
                        </button>
                    ) : null}
                </div>
            </form>
        </div>
    );
};
