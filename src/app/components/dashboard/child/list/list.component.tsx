import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Typography, Icon, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Child } from '../../../../models';
import { useAPI } from '../../../../hooks';
import { ChildCard } from '../card/card.component';

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    list: {
        marginTop: theme.spacing(1),
        display: 'grid',
        gridGap: theme.spacing(2),
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
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

interface ChildListProps {
    className?: string;
}

const ChildList: React.FC<ChildListProps> = ({ className }) => {
    const classes = useStyles({});
    const { request, response } = useAPI<{ children: Child[] }>('/children');

    React.useEffect(() => {
        request();
    }, [request]);

    if (!response?.children) return <div></div>;
    const { children } = response;
    return (
        <div className={className}>
            <section className={classes.header}>
                <Typography variant='overline' gutterBottom>
                    Child Accounts
                </Typography>

                <Link to='/dashboard/child/create'>
                    <IconButton>
                        <Icon>add_circle_outline</Icon>
                    </IconButton>
                </Link>
            </section>

            <section className={classes.list}>
                {children.map((child) => (
                    <ChildCard key={child.id} child={child} onUpdate={request}></ChildCard>
                ))}
                {children.length === 0 && (
                    <section className={classes.empty}>
                        <Icon fontSize='large'>child_care</Icon>
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
