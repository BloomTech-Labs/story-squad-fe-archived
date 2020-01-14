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

import { Child } from '../../../models';
import { useAPI } from '../../../hooks';
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
interface KidProgressProps {
    child: Child;
    onUpdate?: () => void;
}

const KidProgressCard: React.FC<KidProgressProps> = ({ child, onUpdate }) => {
    const classes = useStyles({});
    const history = useHistory();

    
    return (
        <Card className={classes.card}>
            <CardHeader
                className={classes.header}
                title={child.username}
                action={
                    <>
                    />
            <CardContent>
                <Typography variant='h5'>Weekly Progress</Typography>

                <Typography variant='subtitle1'>2/5 lessons completed this week</Typography>

                <div className={classes.statusIcons}>
                    <CardIcon title='Phase of the game' status={`Upload Fan Fiction`} />
                    <CardIcon title='Assignments Completed' status='None' />
                    <CardIcon title='Time left to submit' status='1 week' />
                    <CardIcon title='Current Badges' status='All the loot' />
                    <CardIcon title='Assigned Points' status='0' />
                </div>
            </CardContent>
            <CardActions className={classes.actions}>
                <Button >View Partner's Account</Button>
            </CardActions>
        </Card>
    

export { KidProgressCard };