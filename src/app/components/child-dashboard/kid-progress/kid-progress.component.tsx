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
    table: {
        minWidth: 650,
    },
}));

function createData(name: string, Due: string, Progress: string, Complete: string) {
    return { name, Due, Progress, Complete };
}

interface KidProgressProps {
    onUpdate?: () => void;
}
const rows = [
    createData('Read the story', 'Mon 1/2', 'Complete', 'Invest points'),
    createData('Write your story', 'Mon 1/2', 'Complete', 'Invest points'),
    createData('Draw a picture', 'Mon 1/2', 'Complete', 'Invest points'),
    createData(
        'Review partners work and assign points',
        'Tues 1/3',
        'Its not too late, finish by wed 1/4',
        'Invest points'
    ),
    createData(
        'Evaluate 3 stories',
        'Wed 1/4',
        'Rock on, lets get in this bus by Thurs 1/5',
        'Evaluate'
    ),
    createData('Get the results and review feedback', 'Sat 1/7', '', 'See Feedback'),
];
const KidProgressCard: React.FC<KidProgressProps> = ({ onUpdate }) => {
    const classes = useStyles({});
    const history = useHistory();

    return (
        <Card className={classes.card}>
            <CardHeader className={classes.header} title={'Tom'} />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Week 12 Missions</TableCell>
                            <TableCell align='right'>Due</TableCell>
                            <TableCell align='right'>Progress</TableCell>
                            <TableCell align='right'>Complete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component='th' scope='row'>
                                    {row.name}
                                </TableCell>
                                <TableCell align='right'>{row.Due}</TableCell>
                                <TableCell align='right'>{row.Progress}</TableCell>
                                <TableCell align='right'>{row.Complete}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            >
        </Card>
    );
};
export { KidProgressCard };
