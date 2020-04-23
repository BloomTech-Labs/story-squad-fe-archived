import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Child } from '../../../models';
import { useStyles } from './welcome-card-styles';

interface WelcomeCardProps {
    className?: string;
    child: Child;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ className, child }) => {
    const classes = useStyles({});
    const today = new Date();
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    return (
        <Card className={`${className} ${classes.card}`}>
            <CardContent className={classes.cardContent}>
                <section>
                    <Typography variant='h4' component='h1' gutterBottom>
                        Welcome back {child.username}!
                    </Typography>
                    <Typography variant='h6' component='h2'>
                        Yay! You have completed your picture and story of the week!
                    </Typography>
                </section>
                <section>
                    <Typography variant='h6' component='h3'>
                        {months[today.getMonth()]} {today.getDate()}, {today.getFullYear()}
                    </Typography>
                </section>
            </CardContent>
        </Card>
    );
};

export { WelcomeCard };
