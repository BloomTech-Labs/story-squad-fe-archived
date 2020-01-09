import React from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { User } from '../../../../models';

const useStyles = makeStyles(() => ({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

interface ParentCardProps {
    className: string;
    user: User;
}

const ParentCard: React.FC<ParentCardProps> = ({ user, className }) => {
    const classes = useStyles({});

    return (
        <Card className={`${className} ${classes.card}`}>
            <CardContent>
                <Typography variant='h3' component='h1' gutterBottom>
                    Welcome back {user.email}
                </Typography>
                <Typography variant='h5' component='h2'>
                    Let's see how each participant is doing this week.
                </Typography>
            </CardContent>
        </Card>
    );
};

export { ParentCard };
