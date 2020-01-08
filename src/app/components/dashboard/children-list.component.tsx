import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { Child } from '../../models';
import { useAPI } from '../../hooks';
import { ChildCard } from './child-card.component';

const useStyles = makeStyles(() => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}));

const ChildrenList: React.FC = () => {
    const classes = useStyles({});
    const { request, response } = useAPI<{ children: Child[] }>('/child');

    React.useEffect(() => {
        request();
    }, [request]);

    if (!response?.children) return <div></div>;
    const { children } = response;
    return (
        <div>
            <div className={classes.header}>
                <Typography variant='h4' gutterBottom>
                    Child Accounts
                </Typography>

                <Link to='/child/create'>
                    <Button>Add Child</Button>
                </Link>
            </div>

            {children.map((child) => (
                <ChildCard key={child.id} child={child} onUpdate={request}></ChildCard>
            ))}
        </div>
    );
};

export { ChildrenList };
