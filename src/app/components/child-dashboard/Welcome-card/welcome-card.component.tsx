import React from 'react';

import { Avatar, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Child } from '../../../models';

const useStyles = makeStyles(() => ({
    card: {},
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    avatar: {
        width: 128,
        height: 128,
    },
}));

interface WelcomeCardProps {
    className?: string;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ className }) => {
    const classes = useStyles({});

    return (
        <Card className={`${className} ${classes.card}`}>
            <CardContent className={classes.cardContent}>
                <section>
                    <Typography variant='h4' component='h1' gutterBottom>
                        Welcome back
                    </Typography>
                    <Typography variant='h6' component='h2'>
                        Let's read the story of this week.
                    </Typography>
                </section>
                <section>
                    <Avatar className={classes.avatar} />
                </section>
            </CardContent>
        </Card>
    );
};

export { WelcomeCard };
