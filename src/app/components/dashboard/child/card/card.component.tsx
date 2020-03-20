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
import avatar from './avatars/Hero19.png';

const useStyles = makeStyles((theme) => ({
    card: {
        width: '340px',
        borderRadius: '15px',
        backgroundColor: '#D0F2EC',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
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
    avatarDiv: {
        height: '150px',
        width: '100px',
        backgroundImage: `url(${avatar})`,
        backgroundSize: 'cover',
        display: 'inline-block',
    },
    childProgBtn: {
        fontSize: '30px',
        fontFamily: 'bangers',
        color: 'white',
        backgroundColor: '#007AFF',
        borderRadius: '14px',
        padding: '0 20px',
    },
    usernameDiv: {
        'fontSize': '36px',
        'display': 'inline-block',
        'marginLeft': '10px',
        'fontFamily': 'bangers',
        'color': '#0267C1',
        '-webkit-text-stroke-width': '1px',
        '-webkit-text-stroke-color': '#ff6d3a',
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
            <CardContent>
                <div className={classes.avatarDiv}></div>{' '}
                <div className={classes.usernameDiv}>{child.username}</div>
            </CardContent>
            <CardActions className={classes.actions}>
                <div className={classes.wrapper}>
                    {child.subscription === true ? (
                        <Button
                            className={classes.childProgBtn}
                            fullWidth
                            disabled={loading}
                            onClick={() => request()}>
                            {child.username} Login
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
