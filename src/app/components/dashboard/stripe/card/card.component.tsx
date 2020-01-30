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

interface StripeCardProps {
    className?: string;
    card: CreditCard;
    onDelete?: () => void;
    onUpdate?: () => void;
    defaultCard: boolean;
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

const StripeCard: React.FC<StripeCardProps> = ({
    className,
    card,
    onDelete,
    onUpdate,
    defaultCard,
}) => {
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

    return (
        <Card className={`${className} ${classes.card}`}>
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
                className={classes.chip}
                size='small'
                clickable={!defaultCard}
                label={defaultCard ? 'Default' : 'Make Default'}
                color='primary'
                variant={defaultCard ? 'default' : 'outlined'}
                onClick={defaultCard ? undefined : () => updateRequest()}
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
