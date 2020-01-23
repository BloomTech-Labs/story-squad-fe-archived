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
    onUpdate?: () => void;
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

const StripeCard: React.FC<StripeCardProps> = ({ card, onDelete, onUpdate, defaultCard }) => {
    const { request: updateRequest, response: updateResponse } = useAPI(
        `/payment/default/${card.id}`,
        'PUT'
    );
    const { request: deleteRequest, response: deleteResponse } = useAPI(
        `/payment/cards/${card.id}`,
        'DELETE'
    );

    const classes = useStyles({});

    React.useEffect(() => {
        if (deleteResponse?.message && onDelete) onDelete();
        if (deleteResponse?.message) deleteResponse.message = undefined;
    }, [onDelete, deleteResponse]);

    React.useEffect(() => {
        if (updateResponse?.message && onUpdate) onUpdate();
        if (updateResponse?.message) updateResponse.message = undefined;
    }, [onUpdate, updateResponse]);

    return card.id === defaultCard ? (
        <Card className={classes.card}>
            <CardHeader
                title={card.brand}
                subheader={card.last4}
                action={
                    <IconButton onClick={deleteRequest}>
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
                    <IconButton onClick={() => deleteRequest()}>
                        <Icon>delete</Icon>
                    </IconButton>
                }
            />
            <Chip
                size='small'
                clickable
                label='Make Default'
                color='primary'
                variant='outlined'
                className={classes.chip}
                onClick={() => updateRequest()}
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
