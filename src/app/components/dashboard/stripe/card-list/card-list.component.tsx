import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

import { PaymentContext, creditCardsRefresh } from '../../../../state';
import { StripeCard } from '../card/card.component';

const useStyles = makeStyles((theme) => ({
    list: {
        display: 'grid',
        gridGap: theme.spacing(1),
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    },
}));

interface CardListProps {
    className?: string;
}

const CardList: React.FC<CardListProps> = ({ className }) => {
    const classes = useStyles({});
    const paymentInfo = React.useContext(PaymentContext);

    if (!paymentInfo.cards?.length) return <CircularProgress size={24} />;
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
