import React from 'react';
import { Link } from 'react-router-dom';

import { Button, CircularProgress, Icon, Typography } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import { Child } from '../../../../models';
import { ChildCard } from '../card/card.component';

const useStyles = makeStyles((theme) => ({
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    list: {
        marginTop: theme.spacing(3),
        display: 'grid',
        gridGap: theme.spacing(4),
        gridTemplateColumns: '1fr',
        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: '1fr 1fr',
        },
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
    button: {
        borderRadius: theme.shape.borderRadius,
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

interface ChildListProps {
    className?: string;
    list: Child[];
}

const ChildList: React.FC<ChildListProps> = ({ className, list }) => {
    const classes = useStyles({});

    if (!list)
        return (
            <section className={classes.loading}>
                <CircularProgress size={56} />
            </section>
        );
    return (
        <div className={className}>
            <section className={classes.header}>
                <Typography variant='overline' gutterBottom>
                    Child Accounts
                </Typography>

                <Link to='/dashboard/child/create'>
                    <Button variant='outlined' color='primary' className={classes.button}>
                        Add Child
                    </Button>
                </Link>
            </section>

            <section className={classes.list}>
                {list.map((child) => (
                    <ChildCard key={child.id} child={child}></ChildCard>
                ))}
                {list.length === 0 && (
                    <section className={classes.empty}>
                        <Icon color='disabled' fontSize='large'>
                            child_care
                        </Icon>
                        <Typography variant='subtitle1'>0 Child Accounts</Typography>
                        <Link to='/dashboard/child/create'>
                            <Button>Add Child</Button>
                        </Link>
                    </section>
                )}
            </section>
        </div>
    );
};

export { ChildList };
