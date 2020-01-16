import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardHeader, Divider, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Child } from '../../../models';

const useStyles = makeStyles((theme) => ({
    card: {},
    statusIcons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        alignItems: 'center',
    },
    headerIcon: { color: 'white' },
    actions: {
        display: 'flex',
        justifyContent: 'center',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        margin: theme.spacing(3),
        alignItems: 'center',
        justifyItems: 'center',
    },
    gridItem: {
        margin: theme.spacing(1.5),
    },
    divider: {
        gridColumnStart: '1',
        gridColumnEnd: '5',
        width: '100%',
    },
}));

interface KidProgressProps {
    child: Child;
}

const KidProgressCard: React.FC<KidProgressProps> = ({ child }) => {
    const classes = useStyles({});

    const { week } = child;
    return (
        <Card className={classes.card}>
            <CardHeader className={classes.header} title={'Tom'} />
            <section className={classes.grid}>
                <>
                    <Typography className={classes.gridItem} variant='h6'>
                        Week 12 Missions
                    </Typography>
                    <Typography className={classes.gridItem} variant='h6'>
                        Due
                    </Typography>
                    <Typography className={classes.gridItem} variant='h6'>
                        Progress
                    </Typography>
                    <Typography className={classes.gridItem} variant='h6'>
                        Complete
                    </Typography>
                </>
                <Divider className={classes.divider} variant='fullWidth' />

                <>
                    <Typography className={classes.gridItem}>Read the story</Typography>
                    <Typography className={classes.gridItem}>Mon 1/2</Typography>
                    <Typography className={classes.gridItem}>Complete</Typography>
                    <Link to={`/story/${week}`}>
                        <Button className={classes.gridItem}>Read</Button>
                    </Link>
                </>

                <>
                    <Typography className={classes.gridItem}>Read the story</Typography>
                    <Typography className={classes.gridItem}>Mon 1/2</Typography>
                    <Typography className={classes.gridItem}>Complete</Typography>
                    <Button className={classes.gridItem}>Submit</Button>
                </>

                <>
                    <Typography className={classes.gridItem}>Read the story</Typography>
                    <Typography className={classes.gridItem}>Mon 1/2</Typography>
                    <Typography className={classes.gridItem}>Complete</Typography>
                    <Button className={classes.gridItem}>Invest points</Button>
                </>
            </section>
        </Card>
    );
};
export { KidProgressCard };
