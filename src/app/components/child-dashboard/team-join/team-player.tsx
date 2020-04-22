import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useStyles } from './team-join-styles';

interface PlayerProps {
    username: string;
    ava: string;
    playerStyles: {};
}
const TeamPlayer: React.FC<PlayerProps> = ({ username, ava, playerStyles }) => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div className={`${playerStyles}`}>
            <div className={classes.avatarDiv}>
                <p className={classes.username}>
                    Hi! My name is {''}
                    {!username ? 'Student' : username}!
                </p>
                <img src={ava} className={classes.avatar} alt='child avatar' />
            </div>
            {playerStyles === classes.player ? (
                <Button
                    className={classes.navButton}
                    type='button'
                    onClick={() => history.push('/kids-dashboard')}>
                    Back
                </Button>
            ) : (
                <Button
                    className={classes.navButton}
                    type='button'
                    onClick={() => history.push('./points-dashboard')}>
                    Next
                </Button>
            )}
        </div>
    );
};

export { TeamPlayer };
