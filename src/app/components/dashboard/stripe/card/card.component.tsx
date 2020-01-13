import React from 'react';

import { Card, CardContent, Typography, CardHeader, IconButton, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { CreditCard } from '../../../../models';
import { useAPI } from '../../../../hooks';

interface StripeCardProps {
    card: CreditCard;
    onDelete?: () => void;
}

const useStyles = makeStyles((theme) => ({
    card: {},
    cardContent: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
}));

const StripeCard: React.FC<StripeCardProps> = ({ card, onDelete }) => {
    const { request, response } = useAPI(`/payment/cards/${card.id}`, 'DELETE');
    const classes = useStyles({});

    React.useEffect(() => {
        if (response?.message && onDelete) onDelete();
    }, [onDelete, response]);

    return (
        <Card className={classes.card}>
            <CardHeader
                title={card.brand}
                subheader={card.last4}
                action={
                    <IconButton onClick={request}>
                        <Icon>delete</Icon>
                    </IconButton>
                }
            />
            <CardContent className={classes.cardContent}>
                <Typography variant='subtitle2'>
                    {card.exp_month}/{card.exp_year}
                </Typography>
            </CardContent>
        </Card>
    );
};

export { StripeCard };
