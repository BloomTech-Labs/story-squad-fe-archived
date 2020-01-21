import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import {
    Card,
    CardContent,
    Button,
    CircularProgress,
    Typography,
    CardActions,
    CardHeader,
    IconButton,
    Icon,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import { Child } from '../../../../models';
import { useAPI } from '../../../../hooks';
import { CardIcon } from './icon.component';

const useStyles = makeStyles((theme) => ({
    card: {},
    statusIcons: {
        display: 'flex',
        justifyContent: 'space-around',
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

    const { request: signIn, response, loading } = useAPI(`/children/${child.id}/login`, 'POST');
    const { request: remove, response: removeResponse, reset: removeReset } = useAPI(
        `/children/${child.id}`,
        'DELETE'
    );
    const subscriptionStatus = child.subscription;

    React.useEffect(() => {
        if (!response?.token) return;
        localStorage.setItem('jwt', response.token);
        window.dispatchEvent(new Event('switch-accounts'));
        history.push('/kids-dashboard');
    }, [history, response]);

    React.useEffect(() => {
        if (removeResponse && onUpdate) {
            onUpdate();
            removeReset();
        }
    }, [history, onUpdate, removeReset, removeResponse]);

    return (
        <Card className={classes.card}>
            <CardHeader
                className={classes.header}
                title={child.username}
                action={
                    <>
                        <Link to={`/dashboard/child/edit/${child.id}`}>
                            <IconButton>
                                <Icon className={classes.headerIcon}>edit</Icon>
                            </IconButton>
                        </Link>

                        <IconButton onClick={remove}>
                            <Icon className={classes.headerIcon}>delete</Icon>
                        </IconButton>
                    </>
                }
            />
            <CardContent>
                <Typography variant='h5'>Weekly Progress</Typography>

                <Typography variant='subtitle1'>2/5 lessons completed this week</Typography>

                <div className={classes.statusIcons}>
                    <CardIcon title='Reading Level' status={`Grade ${child.grade}`} />
                    <CardIcon title='Accessability' status='None' />
                    <CardIcon title='Week' status='12' />
                    <CardIcon title='Current Phase' status='Allocating Points' />
                </div>
            </CardContent>
            <CardActions className={classes.actions}>
                <div className={classes.wrapper}>
                    {subscriptionStatus === true ? (
                        <Button fullWidth disabled={loading} onClick={() => signIn()}>
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
