import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardHeader, Divider, Button, Typography, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Child } from '../../../models';

const useStyles = makeStyles((theme) => ({
    card: {},
    header: {
        display: 'flex',
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        justifyContent: 'space-evenly',
    },
    title: {
        display: 'flex',
        alignItems: 'center',
    },
    progress: {
        marginLeft: theme.spacing(8),
        marginRight: theme.spacing(8),
        flexGrow: 1,
        height: theme.spacing(1),
        borderRadius: 30,
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
            <CardHeader
                className={classes.header}
                title={
                    <div className={classes.title}>
                        <Typography variant='h6'>Tom</Typography>
                        <LinearProgress
                            className={classes.progress}
                            variant='determinate'
                            color='secondary'
                            value={20}
                        />
                    </div>
                }
            />
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
                    <Typography className={classes.gridItem}>Write your story</Typography>
                    <Typography className={classes.gridItem}>Mon 1/2</Typography>
                    <Typography className={classes.gridItem}>Complete</Typography>
                    <Button className={classes.gridItem}>Submit</Button>
                </>

                <>
                    <Typography className={classes.gridItem}>Draw a picture</Typography>
                    <Typography className={classes.gridItem}>Mon 1/2</Typography>
                    <Typography className={classes.gridItem}>Complete</Typography>
                    <Button className={classes.gridItem}>Draw</Button>
                </>

                <>
                    <Typography className={classes.gridItem}>
                        Review partner's work and assign points
                    </Typography>
                    <Typography className={classes.gridItem}>Tues 1/3</Typography>
                    <Typography className={classes.gridItem}>
                        Its not too late - finish by Wed 1/4
                    </Typography>
                    <Button className={classes.gridItem}>Invest points</Button>
                </>

                <>
                    <Typography className={classes.gridItem}>Evaluate 3 stories</Typography>
                    <Typography className={classes.gridItem}>Wed 1/4</Typography>
                    <Typography className={classes.gridItem}>
                        Rock on! Lets get this in by Thurs 1/5
                    </Typography>
                    <Button className={classes.gridItem}>Evaluate</Button>
                </>

                <>
                    <Typography className={classes.gridItem}>
                        Get the results and review feedbacks
                    </Typography>
                    <Typography className={classes.gridItem}>Sat 1/7</Typography>
                    <Typography className={classes.gridItem}>Complete</Typography>
                    <Button className={classes.gridItem}>See Feedback</Button>
                </>
            </section>
        </Card>
    );
};
export { KidProgressCard };
