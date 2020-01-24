import React from 'react';
import { Link } from 'react-router-dom';

import {
    Button,
    Typography,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAPI } from '../../../../hooks';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '35vh',
        width: '100%',
        maxWidth: '80ch',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    loading: {
        marginLeft: '1ch',
    },
}));

interface CohortManagementProps {
    className?: string;
}

interface Cohort {
    id: number;
    name: string;
    week: string;
    activity?: string;
}

const ManageCohortPage: React.FC<CohortManagementProps> = ({ className }) => {
    const classes = useStyles({});
    const { request, response } = useAPI<{ cohort: Cohort[] }>('/cohort/list');

    React.useEffect(() => {
        request();
    }, [request]);

    return (
        <div className={className}>
            <div className={classes.header}>
                <Typography variant='h4' gutterBottom>
                    Cohort Management
                </Typography>

                <Link to='/admin/dashboard/create-cohort'>
                    <Button>Create Cohort</Button>
                </Link>
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Cohort Name</TableCell>
                    </TableRow>
                </TableHead>
                <Button>Edit Cohort</Button>
                <Button>Delete Cohort</Button>
                <TableBody></TableBody>
            </Table>
        </div>
    );
};

export { ManageCohortPage };
