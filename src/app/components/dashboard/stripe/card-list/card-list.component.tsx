import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { CreditCard } from '../../../../models';
import { useAPI } from '../../../../hooks';
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
    const { request, response } = useAPI<{ cards: CreditCard[] }>('/payment/cards');

    React.useEffect(() => {
        request();
    }, [request]);

    if (!response) return <div></div>;
    const { cards } = response;
    return (
        <div className={`${className} ${classes.list}`}>
            {cards.map((card) => (
                <StripeCard key={card.id} card={card} onDelete={request} />
            ))}
        </div>
    );
};

export { CardList };
