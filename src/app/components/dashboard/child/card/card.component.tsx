import React from 'react';
import { useHistory } from 'react-router-dom';

import {
    Card,
    CardContent,
    Typography,
    CardHeader,
    CircularProgress,
    CardActions,
    Button,
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
}));

interface ChildCardProps {
    child: Child;
    onUpdate?: () => void;
}

const ChildCard: React.FC<ChildCardProps> = ({ child, onUpdate }) => {
    const classes = useStyles({});
    const history = useHistory();

    const signIn = useAPI(`/children/${child.id}/login`, 'POST');

    React.useEffect(() => {
        if (!signIn.response?.token) return;
        localStorage.setItem('jwt', signIn.response.token);
        window.dispatchEvent(new Event('switch-accounts'));
        history.push(`/kids-dashboard`);
    }, [child.id, history, signIn.response]);

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
                            <CircularProgress
                                className={classes.progressForeground}
                                color='inherit'
                                variant='static'
                                value={35}
                            />
                        </div>
                        <Typography className={classes.title} variant='h5'>
                            {child.username}
                        </Typography>
                    </section>
                }
            />
            <CardContent>
                <Typography variant='h5'>Week {child.week} Progress</Typography>

                <Typography variant='subtitle1'>2/5 lessons completed this week</Typography>
            </CardContent>
            <CardActions className={classes.actions}>
                <Button onClick={() => signIn.request()}>Get going!</Button>
            </CardActions>
        </Card>
    );
};

export { ChildCard };
