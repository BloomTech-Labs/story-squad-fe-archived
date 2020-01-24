import React from 'react';
import { useHistory } from 'react-router';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAPI } from '../../../../hooks';

const useStyles = makeStyles(() => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '35vh',
        width: '100%',
        maxWidth: '80ch',
    },
    loading: {
        marginLeft: '1ch',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}));

interface ListCohortsProps {
    className?: string;
}

interface Cohort {
    id: number;
    name: string;
    week: string;
    activity?: string;
}

const ListCohorts: React.FC<ListCohortsProps> = ({ className }) => {
    const classes = useStyles({});
    const { request, response } = useAPI<{ cohorts: Cohort[] }>('/cohort/list');

    React.useEffect(() => {
        request();
    }, [request]);

    if (!response?.cohorts) return <h4 className={classes.loading}>Loading...</h4>;

    const { cohorts } = response;

    return (
        <div className={className}>
            <div className={classes.header}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Cohort Name</TableCell>
                            <TableCell>Cohort Week</TableCell>
                            <TableCell>Cohort Activity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cohorts.map((account) => (
                            <TableRow key={account.id}>
                                <TableCell>{account.name}</TableCell>
                                <TableCell>{account.week}</TableCell>
                                <TableCell>{account.activity}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export { ListCohorts };
