import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
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
                <div>
                    <Link to='/admin/dashboard/cohort/create'>
                        <Button className={classes.button} color='primary' variant='contained'>
                            Create Cohort
                        </Button>
                    </Link>

                    {/* <Button onClick={() => } color='primary' variant='contained'>
                        Edit
                    </Button> */}

                    <Button
                        className={classes.button}
                        color='primary'
                        variant='contained'
                        onClick={(e) => {
                            e.preventDefault();
                            window.alert('Not Yet Implemented');
                        }}>
                        Edit
                    </Button>

                    {/* <Button onClick={() => remove()}>Delete</Button> */}

                    <Button
                        className={classes.button}
                        color='primary'
                        variant='contained'
                        onClick={(e) => {
                            e.preventDefault();
                            window.alert('Not Yet Implemented');
                        }}>
                        Delete
                    </Button>
                </div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Select</TableCell>
                            <TableCell>Cohort Name</TableCell>
                            <TableCell>Children</TableCell>
                            <TableCell>Chapter</TableCell>
                            <TableCell>Flagged</TableCell>
                            <TableCell>Status</TableCell>

                            {/* <TableCell></TableCell> */}
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
