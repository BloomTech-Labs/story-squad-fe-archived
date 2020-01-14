import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import {
    Card,
    CardContent,
    Button,
    Typography,
    CardActions,
    CardHeader,
    IconButton,
    Icon,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
}));

interface ChildCardProps {
    child: Child;
    onUpdate?: () => void;
}

const ChildCard: React.FC<ChildCardProps> = ({ child, onUpdate }) => {
    const classes = useStyles({});
    const history = useHistory();

    const signIn = useAPI(`/children/${child.id}/login`, 'POST');
    const remove = useAPI(`/children/${child.id}`, 'DELETE');

    React.useEffect(() => {
        if (!signIn.response?.token) return;
        localStorage.setItem('jwt', signIn.response.token);
        window.dispatchEvent(new Event('switch-accounts'));
        history.push('/kids-dashboard');
    }, [history, signIn.response]);

    React.useEffect(() => {
        if (remove.response && onUpdate) onUpdate();
        if (remove.response) remove.reset();
    }, [history, onUpdate, remove]);

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

                        <IconButton onClick={remove.request}>
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
                <Button onClick={signIn.request}>View Account</Button>
            </CardActions>
        </Card>
    );
};

export { ChildCard };
