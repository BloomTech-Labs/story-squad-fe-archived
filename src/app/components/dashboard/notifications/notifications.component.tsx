import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { useStyles } from './notifications-component-styles';

interface NotificationsCardProps {
    className?: string;
}

const NotificationsCard: React.FC<NotificationsCardProps> = ({ className }) => {
    const classes = useStyles();

    return (
        <Card className={`${className} ${classes.card}`}>
            <CardContent>
                <Typography variant='h5' component='h2'>
                    Notifications Center
                </Typography>
                <List>
                    {[
                        '1/8 Completed Submission',
                        '1/6 Completed Submission',
                        '1/5 Completed Submission',
                        '1/4 Completed Submission',
                    ].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export { NotificationsCard };
