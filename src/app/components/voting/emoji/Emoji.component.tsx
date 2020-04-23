import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

// interface NewEmojiData {
//     newEmoji?: () => void;
// }

const emojiSelection = [
    '😀',
    '😃',
    '😄',
    '😁',
    '😆',
    '😅',
    // 'rolling laugh',
    '😂',
    '🙂',
    '🙃',
    '😉',
    '😇',
    // 'star eyes',
    '😋',
    '😜',
    // 'crazy eyes',
    '😝',
    // 'money tongue',
    // 'covering mouth',
    // 'shush',
    // 'thinking',
    // 'zipper mouth',
    // 'raised eyebrow',
    '😐',
    '😑',
    '😶',
    '😏',
    '😒',
    '🙄',
    '😬',
    // 'pinocchio',
    // 'smug smile',
    '😞',
    '😪',
    // 'drool',
    '😴',
    '😷',
    // 'thermometer',
    // 'bandage',
    // 'green face',
    // 'vomit',
    // 'nose blowing',
    // 'red hot face',
    // 'cold blue face',
    // 'whirly smile',
    // 'crossed out eyes',
    // 'mind blown',
    // 'cowboy hat',
    // 'party',
    '😎',
    // 'nerdy glasses',
    // 'monacle',
    '😕',
    '😟',
    '🙁',
    // 'extra sad',
    '😮',
    '😯',
    '😲',
    '😳',
    // 'puppy eyes',
    '😦',
    '😧',
    // 'blue top frown',
    '😰',
    '😥',
    '😢',
    '😭',
    '😱',
    '😖',
    '😣',
    // 'another sad',
    // 'sweaty sad',
    '😩',
    '😫',
    // 'yawn with hand',
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
            'margin': '1%',
            'position': 'relative',
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
    })
);

export const Emoji: React.FC = () => {
    const classes = useStyles({});
    const [newEmoji, setNewEmoji] = React.useState([]);

    const handleChanges = (e) => {
        setNewEmoji([...newEmoji, e.target.value]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewEmoji([]);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div> {newEmoji} </div>
                <div className={classes.emojiContainer}>
                    {emojiSelection.map((emoji) => {
                        return (
                            <div className={classes.emojiDiv} key={emoji}>
                                <button
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
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};
