import React from 'react';
import { Link } from 'react-router-dom';
import { Button, CircularProgress, Icon, Typography } from '@material-ui/core';
import { Child } from '../../../../models';
import { ChildCard } from '../card/card.component';
import { useStyles } from './list-component-styles';

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
                <Typography className={classes.headerFont}>Story Squad</Typography>
            </section>

            {list.length === 0 && <section className={classes.empty}></section>}

            <section className={classes.list}>
                {list.map((child) => (
                    <ChildCard key={child.id} child={child}></ChildCard>
                ))}
            </section>
            <Link to='/dashboard/child/create'>
                <Button className={classes.addChild}>
                    {' '}
                    <Icon color='disabled' fontSize='large'>
                        add
                    </Icon>
                    Add a Child
                </Button>
            </Link>
        </div>
    );
};

export { ChildList };
