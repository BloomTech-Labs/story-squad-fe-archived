import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CircularProgress,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

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
            marginTop: theme.spacing(0.75),
        },
    },
    titleBar: {
        display: 'flex',
    },
    title: {
        marginLeft: theme.spacing(7),
        lineHeight: '2.5rem',
    },
    progress: {},
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
        justifyContent: 'flex-end',
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
        marginTop: -24,
        marginLeft: -12,
    },
}));

interface ChildCardProps {
    child: Child;
    onUpdate?: () => void;
}

const ChildCard: React.FC<ChildCardProps> = ({ child, onUpdate }) => {
    const classes = useStyles({});
    const history = useHistory();
    const [response, loading, request] = useAPI(`/children/${child.id}/login`, 'POST');

    React.useEffect(() => {
        if (!response?.token) return;
        localStorage.setItem('jwt', response.token);
        window.dispatchEvent(new Event('switch-accounts'));
        history.push(`/kids-dashboard`);
    }, [child.id, history, response]);

    return (
        <Card className={classes.card}>
            <CardHeader
                className={classes.header}
                title={
                    <section className={classes.titleBar}>
                        <div className={classes.progress}>
                            <CircularProgress
                                className={classes.progressBackground}
                                color='inherit'
                                variant='static'
                                value={100}
                            />
                        </div>
                        <Typography className={classes.title} variant='h5'>
                            {child.username}
                        </Typography>
                    </section>
                }
            />
            <CardContent>
                <Typography variant='h5'>Week {child.cohort.week} Progress</Typography>

                <Typography variant='subtitle1'>2/5 tasks completed this week</Typography>
            </CardContent>
            <CardActions className={classes.actions}>
                <div className={classes.wrapper}>
                    {child.subscription === true ? (
                        <Button fullWidth disabled={loading} onClick={() => request()}>
                            View Account
                        </Button>
                    ) : (
                        <Link to={`/dashboard/subscribe/${child.id}`}>
                            <Button fullWidth>Subscribe</Button>
                        </Link>
                    )}

                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
            </CardActions>
        </Card>
    );
};

export { ChildCard };
