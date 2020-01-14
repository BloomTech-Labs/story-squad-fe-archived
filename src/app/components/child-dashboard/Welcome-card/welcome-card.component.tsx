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

interface ChildCardProps {
    className?: string;
    child: Child;
}

const ChildCard: React.FC<ChildCardProps> = ({ child, className }) => {
    const classes = useStyles({});

    return (
        <Card className={`${className} ${classes.card}`}>
            <CardContent className={classes.cardContent}>
                <section>
                    <Typography variant='h4' component='h1' gutterBottom>
                        Welcome back {child.id}
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

export { ChildCard };
