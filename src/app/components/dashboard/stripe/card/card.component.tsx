import React from 'react';

import {
    Card,
    CardContent,
    Typography,
    CardHeader,
    IconButton,
    Icon,
    Chip,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { CreditCard } from '../../../../models';
import { useAPI } from '../../../../hooks';
import { create } from 'react-test-renderer';

interface StripeCardProps {
    card: CreditCard;
    onDelete?: () => void;
    defaultCard: string;
}

const useStyles = makeStyles((theme) => ({
    card: {},
    cardContent: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    chip: {
        marginLeft: 12,
    },
}));

const StripeCard: React.FC<StripeCardProps> = ({ card, onDelete, defaultCard }) => {
    const { request, response } = useAPI(`/payment/cards/${card.id}`, 'DELETE');
    const classes = useStyles({});
    console.log('id', card.id);
    console.log('default', defaultCard);
    React.useEffect(() => {
        if (response?.message && onDelete) onDelete();
    }, [onDelete, response]);

    return card.id === defaultCard ? (
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
            <Chip size='small' label='Default' color='primary' className={classes.chip} />
            <CardContent className={classes.cardContent}>
                <Typography variant='subtitle2'>
                    {card.exp_month}/{card.exp_year}
                </Typography>
            </CardContent>
        </Card>
    ) : (
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
