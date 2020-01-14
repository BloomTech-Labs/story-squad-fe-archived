import React from 'react';
import { Link } from 'react-router-dom';

import {
    Card,
    CardContent,
    Button,
    Typography,
    CardActions,
    CardHeader,
    CircularProgress,
    IconButton,
    Icon,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Child } from '../../../../models';
import { useAPI } from '../../../../hooks';

const useStyles = makeStyles((theme) => ({
    card: {},
    statusIcons: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    header: {
        'backgroundColor': theme.palette.primary.main,
        'color': 'white',
        'alignItems': 'center',
        '& > .MuiCardHeader-action': {
            margin: 0,
        },
    },
    titleBar: {
        display: 'flex',
    },
    title: {
        lineHeight: '2.5rem',
    },
    progress: {
        marginLeft: theme.spacing(2),
    },
    progressBackground: {
        position: 'absolute',
        color: theme.palette.grey[500],
        opacity: 0.2,
    },
    progressForeground: {
        position: 'absolute',
        color: theme.palette.secondary.main,
    },
    actionButton: {},
    actions: {
        display: 'flex',
        justifyContent: 'center',
    },
}));

interface ChildCardProps {
    child: Child;
    onUpdate?: () => void;
}

const ChildCard: React.FC<ChildCardProps> = ({ child, onUpdate }) => {
    const classes = useStyles({});

    const remove = useAPI(`/children/${child.id}`, 'DELETE');

    React.useEffect(() => {
        if (remove.response && onUpdate) onUpdate();
        if (remove.response) remove.reset();
    }, [onUpdate, remove]);

    return (
        <Card className={classes.card}>
            <CardHeader
                className={classes.header}
                title={
                    <section className={classes.titleBar}>
                        <Typography className={classes.title} variant='h5'>
                            {child.username}
                        </Typography>
                        <div className={classes.progress}>
                            <CircularProgress
                                className={classes.progressBackground}
                                color='inherit'
                                variant='static'
                                value={100}
                            />
                            <CircularProgress
                                className={classes.progressForeground}
                                color='inherit'
                                variant='static'
                                value={35}
                            />
                        </div>
                    </section>
                }
                action={
                    <>
                        <Link to={`/dashboard/child/edit/${child.id}`}>
                            <Button className={classes.actionButton} color='inherit'>
                                Edit
                            </Button>
                        </Link>
                    </>
                }
            />
            <CardContent>
                <Typography variant='h5'>Week {child.week} Progress</Typography>

                <Typography variant='subtitle1'>2/5 lessons completed this week</Typography>
            </CardContent>
        </Card>
    );
};

export { ChildCard };
