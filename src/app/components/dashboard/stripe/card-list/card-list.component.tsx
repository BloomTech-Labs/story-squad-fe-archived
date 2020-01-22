import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

import { CreditCard } from '../../../../models';
import { useAPI } from '../../../../hooks';
import { StripeCard } from '../card/card.component';

const useStyles = makeStyles((theme) => ({
    list: {
        display: 'grid',
        gridGap: theme.spacing(1),
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));

interface CardListProps {
    className?: string;
}

const CardList: React.FC<CardListProps> = ({ className }) => {
    const classes = useStyles({});
    const { request, response, loading } = useAPI<{ cards: CreditCard[]; customer }>(
        '/payment/cards'
    );
    React.useEffect(() => {
        request();
    }, [request]);
    if (!response)
        return (
            <div>
                <div className={classes.wrapper}>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
            </div>
        );
    const { cards, customer } = response;
    return (
        <div className={`${className} ${classes.list}`}>
            {cards.map((card) => (
                <StripeCard
                    key={card.id}
                    card={card}
                    onDelete={request}
                    onUpdate={request}
                    defaultCard={customer.default_source}
                />
            ))}
        </div>
    );
};

export { CardList };
