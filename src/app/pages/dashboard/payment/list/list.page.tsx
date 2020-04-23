import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import { CardList } from '../../../../components';
import { useStyles } from './list.page.styles';
const CardListPage: React.FC = () => {
    const classes = useStyles({});

    return (
        <>
            <header className={classes.header}>
                <Typography variant='overline'>Cards</Typography>

                <Link to='/dashboard/cards/add'>
                    <Button variant='outlined' color='primary' className={classes.button}>
                        Add Card
                    </Button>
                </Link>
            </header>
            <section className={classes.list}>
                <CardList />
            </section>
        </>
    );
};

export { CardListPage };
