import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { Cohort } from '../../../../models';
import { useAPI } from '../../../../hooks';
import { CohortListItem } from './item.component';
import { useStyles } from './list.component.styles';

interface ListCohortsProps {
    className?: string;
}

const ListCohorts: React.FC<ListCohortsProps> = ({ className }) => {
    const classes = useStyles({});
    const [response, loading, request] = useAPI<{ cohorts: Cohort[] }>('/cohort/list');

    if (!response?.cohorts) return <h4 className={classes.loading}>Loading...</h4>;
    return (
        <div className={className}>
            <div className={classes.header}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Cohort Name</TableCell>
                            <TableCell>Cohort Week</TableCell>
                            <TableCell>Cohort Activity</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {response.cohorts.map((cohort) => (
                            <CohortListItem
                                key={cohort.id}
                                cohort={cohort}
                                onUpdate={() => request()}
                            />
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export { ListCohorts };
