import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Icon, CircularProgress } from '@material-ui/core';

import { PaymentContext, creditCardsRefresh } from '../../../../state';
import { StripeCard } from '../card/card.component';

const useStyles = makeStyles((theme) => ({
    list: {
        display: 'grid',
        gridGap: theme.spacing(1),
        gridTemplateColumns: '1fr',
        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: '1fr 1fr',
        },
    },
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    empty: {
        'overflow': 'hidden',
        'maxWidth': '100%',
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'center',
        'alignItems': 'center',
        '& > .MuiIcon-fontSizeLarge': {
            fontSize: 320,
        },
    },
}));

interface CardListProps {
    className?: string;
}

const CardList: React.FC<CardListProps> = ({ className }) => {
    const paymentInfo = React.useContext(PaymentContext);
    const classes = useStyles({ cards: paymentInfo.cards?.length });

    if (!paymentInfo.cards)
        return (
            <section className={classes.loading}>
                <CircularProgress size={56} />
            </section>
        );

    if (!paymentInfo.cards?.length)
        return (
            <section className={classes.empty}>
                <Icon color='disabled' fontSize='large'>
                    credit_card
                </Icon>
                <Typography variant='subtitle1'>0 Payment Methods</Typography>
                <Link to='/dashboard/cards/add'>
                    <Button>Add Card</Button>
                </Link>
            </section>
        );

    return (
        <div className={`${className} ${classes.list}`}>
            {paymentInfo.cards.map((card) => (
                <StripeCard
                    key={card.id}
                    card={card}
                    onDelete={creditCardsRefresh}
                    onUpdate={creditCardsRefresh}
                    defaultCard={paymentInfo.customer?.default_source === card.id}
                />
            ))}
        </div>
    );
};

export { CardList };
