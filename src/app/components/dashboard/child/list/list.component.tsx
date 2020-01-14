import React from 'react';
import { Link } from 'react-router-dom';

import { Button, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import { Child } from '../../../../models';
import { useAPI } from '../../../../hooks';
import { ChildCard } from '../card/card.component';

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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
}

const ChildList: React.FC<ChildListProps> = ({ className }) => {
    const classes = useStyles({});
    const { request, response, loading } = useAPI<{ children: Child[] }>('/children');

    React.useEffect(() => {
        request();
    }, [request]);

    if (!response?.children) return <div></div>;
    const { children } = response;
    return (
        <div className={className}>
            <div className={classes.header}>
                <Typography variant='h4' gutterBottom>
                    Child Accounts
                </Typography>

                <Link to='/dashboard/child/create'>
                    <div className={classes.wrapper}>
                        <Button>Add Child</Button>
                        {loading && (
                            <CircularProgress size={24} className={classes.buttonProgress} />
                        )}
                    </div>
                </Link>
            </div>

            {children.map((child) => (
                <ChildCard key={child.id} child={child} onUpdate={request}></ChildCard>
            ))}
        </div>
    );
};

export { ChildList };
