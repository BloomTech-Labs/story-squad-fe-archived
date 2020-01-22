import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

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
    titleBar: {
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        marginRight: theme.spacing(2),
    },
    progress: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 800,
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

    const { cohort, progress } = child;
    const { dueDates: dueDateStrings } = cohort;

    const dueDates = Object.fromEntries(
        Object.entries(dueDateStrings).map(([key, date]) => [key, moment(date)])
    );
    const today = moment(new Date());
    return (
        <Card className={classes.card}>
            <CardHeader
                className={classes.header}
                title={
                    <div className={classes.titleBar}>
                        <Typography variant='h6' className={classes.title}>
                            Tom
                        </Typography>
                        <LinearProgress
                            className={classes.progress}
                            variant='determinate'
                            color='secondary'
                            value={progress.reading ? 100 : 1}
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
                    <Typography className={classes.gridItem}>
                        {dueDates.reading.from(today)}
                    </Typography>
                    <Typography className={classes.gridItem}>
                        {progress.reading
                            ? 'Complete'
                            : today.diff(dueDates.reading) > 0
                            ? 'Due'
                            : 'Upcoming'}
                    </Typography>
                    <Link to={`/story/${cohort.week}`}>
                        <Button className={classes.gridItem}>Read</Button>
                    </Link>
                </>

                {/* <>
                    <Typography className={classes.gridItem}>Write your story</Typography>
                    <Typography className={classes.gridItem}>{dueDates.writing}</Typography>
                    <Typography className={classes.gridItem}>
                        {progress.writing ? 'Complete' : 'Due'}
                    </Typography>
                    <Button className={classes.gridItem}>Submit</Button>
                </>

                <>
                    <Typography className={classes.gridItem}>Draw a picture</Typography>
                    <Typography className={classes.gridItem}>{dueDates.submission}</Typography>
                    <Typography className={classes.gridItem}>
                        {progress.submission ? 'Complete' : 'Due'}
                    </Typography>
                    <Button className={classes.gridItem}>Draw</Button>
                </>

                <>
                    <Typography className={classes.gridItem}>
                        Review partner's work and assign points
                    </Typography>
                    <Typography className={classes.gridItem}>{dueDates.teamReview}</Typography>
                    <Typography className={classes.gridItem}>
                        {progress.teamReview ? 'Complete' : 'Due'}
                    </Typography>
                    <Button className={classes.gridItem}>Invest points</Button>
                </>

                <>
                    <Typography className={classes.gridItem}>Evaluate 3 stories</Typography>
                    <Typography className={classes.gridItem}>{dueDates.randomReview}</Typography>
                    <Typography className={classes.gridItem}>
                        {progress.randomReview ? 'Complete' : 'Due'}
                    </Typography>
                    <Button className={classes.gridItem}>Evaluate</Button>
                </>

                <>
                    <Typography className={classes.gridItem}>
                        Get the results and review feedbacks
                    </Typography>
                    <Typography className={classes.gridItem}>{dueDates.results}</Typography>
                    <Typography className={classes.gridItem}>
                        {progress.results ? 'Complete' : 'Due'}
                    </Typography>
                    <Button className={classes.gridItem}>See Feedback</Button>
                </> */}
            </section>
        </Card>
    );
};
export { KidProgressCard };
