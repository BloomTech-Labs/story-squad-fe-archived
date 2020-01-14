import React from 'react';

import { Avatar, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { User } from '../../../../models';

const useStyles = makeStyles((theme) => ({
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

interface ParentCardProps {
    className?: string;
    user: User;
}

const ParentCard: React.FC<ParentCardProps> = ({ user, className }) => {
    const classes = useStyles({});

    return (
        <Card className={`${className} ${classes.card}`}>
            <CardContent className={classes.cardContent}>
                <section>
                    <Typography variant='h4' component='h1' gutterBottom>
                        Welcome back {user.email}
                    </Typography>
                    <Typography variant='h6' component='h2'>
                        Let's see how each participant is doing this week.
                    </Typography>
                </section>
                <section>
                    <Avatar className={classes.avatar} />
                </section>
            </CardContent>
        </Card>
    );
};

export { ParentCard };
