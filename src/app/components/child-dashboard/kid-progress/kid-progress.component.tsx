import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import {
    Card,
    CardHeader,
    Button,
    Typography,
    LinearProgress,
    Checkbox,
    Divider,
    useMediaQuery,
} from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';

import { Child } from '../../../models';
import { useAPI } from '../../../hooks';

const useStyles = makeStyles((theme) => ({
    card: {
        alignSelf: 'center',
        maxWidth: theme.breakpoints.values.md,
        width: '100%',
    },
    header: {
        display: 'flex',
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        justifyContent: 'space-evenly',
    },
    titleBar: {
        display: 'flex',
        flexWrap: 'wrap',
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
        gridTemplateColumns: '3fr 2fr 1fr',
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
    orangeButton: {
        'marginTop': '20px',
        'backgroundColor': '#FF6B35',
        'fontSize': '24px',
        'fontWeight': 'bold',
        'borderRadius': '50px',
        'color': 'white',
        'width': '200px',
        'height': '50px',
        'boxShadow': '0px 8px 0px #97300A',
        'textTransform': 'capitalize',
        'fontFamily': 'nunito',
        '&:hover': {
            backgroundColor: '#FF6B35',
        },
    },
}));

interface KidProgressProps {
    onUpdate?: () => void;
    child: Child;
}

const KidProgressCard: React.FC<KidProgressProps> = ({ child, onUpdate }) => {
    const classes = useStyles({});
    const [response, loading, request] = useAPI('/children/progress', 'POST');

    React.useEffect(() => {
        if (response?.progress && onUpdate) onUpdate();
        if (response?.progress) response.progress = undefined;
    }, [onUpdate, response]);

    const { cohort, progress, username } = child;
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
                            Complete by {dueDates.writing.from(today)}
                        </Typography>
                        <LinearProgress
                            className={classes.progress}
                            variant='determinate'
                            color='secondary'
                            value={
                                ((Number(progress.reading) + Number(progress.writing)) / 2) * 100
                            }
                        />
                    </div>
                }
            />
            <section className={classes.grid}>
                <>
                    <Typography className={classes.gridItem} variant='h6'>
                        Read the story
                    </Typography>
                    <Link to={`/story/${cohort.week}`} onClick={() => request({ reading: true })}>
                        <Button className={classes.gridItem} variant='outlined'>
                            Read
                        </Button>
                    </Link>
                    <Checkbox className={classes.gridItem} checked={progress.reading} />
                </>

                <>
                    <Typography className={classes.gridItem} variant='h6'>
                        Write your story
                    </Typography>
                    <Link to={`/kids-dashboard/upload`}>
                        <Button className={classes.gridItem} variant='outlined'>
                            Write
                        </Button>
                    </Link>
                    <Checkbox className={classes.gridItem} checked={progress.writing} />
                </>
                <>
                    <Typography className={classes.gridItem} variant='h6'>
                        Give your team points
                    </Typography>
                    <Link to={`/kids-dashboard/points-dashboard`}>
                        <Button className={classes.gridItem} variant='outlined'>
                            Assign Team Points
                        </Button>
                    </Link>
                    <Checkbox className={classes.gridItem} checked={progress.writing} />
                </>
            </section>
        </Card>
    );
};
export { KidProgressCard };
