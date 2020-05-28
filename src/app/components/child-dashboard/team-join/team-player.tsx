import React from 'react';

import { Button } from '@material-ui/core';
import { useStyles } from './team-join-styles';
import Card from '../../reusable-components/card/Card';

interface PlayerProps {
    username: string;
    ava: string;
    playerStyles: {};
}
const TeamPlayer: React.FC<PlayerProps> = ({ username, ava, playerStyles }) => {
    const classes = useStyles();

    return (
        <div className={`${playerStyles}`}>
            <div className={classes.avatarDiv}>
                <p className={classes.username}>
                    Hi! My name is {''}
                    {!username ? 'Student' : username}!
                </p>
                <img src={ava} className={classes.avatar} alt='child avatar' />
            </div>
        </div>
    );
};

export { TeamPlayer };
