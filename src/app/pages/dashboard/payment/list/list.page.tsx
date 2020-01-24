import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Typography, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CardList } from '../../../../components';

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    list: {
        marginTop: theme.spacing(2),
    },
    button: {
        borderRadius: theme.shape.borderRadius,
    },
    empty: {
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'center',
        'alignItems': 'center',
        '& > .MuiIcon-fontSizeLarge': {
            fontSize: '30vh',
        },
    },
}));

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
            <CardList className={classes.list} />
        </>
    );
};

export { CardListPage };
