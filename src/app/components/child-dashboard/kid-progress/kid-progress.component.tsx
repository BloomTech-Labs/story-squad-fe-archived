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
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Child } from '../../../models';
import { useAPI } from '../../../hooks';
import { CardIcon } from '../../dashboard/child/card/icon.component';

const useStyles = makeStyles((theme) => ({
    card: {},
    statusIcons: {
        display: 'flex',
        justifyContent: 'center',
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
    onUpdate?: () => void;
}

const KidProgressCard: React.FC<KidProgressProps> = ({ onUpdate }) => {
    const classes = useStyles({});
    const history = useHistory();

    return (
        <Card className={classes.card}>
            <CardHeader className={classes.header} title={'Tom'} />
            <CardContent>
                <div className={classes.statusIcons}>
                    <CardIcon title='Phase' status={`Grade Fan Fiction`} />
                    <CardIcon title='Assignments Completed' status={'2'} />
                    <CardIcon title='Time left to submit' status={'1 week'} />
                    <CardIcon title='Current Badges' status={'All the loot'} />
                    <CardIcon title='Assigned Points' status={'0'} />
                </div>
            </CardContent>
            <CardActions className={classes.actions}>
                <Button>View Partner's Account</Button>
            </CardActions>
        </Card>
    );
};
export { KidProgressCard };
