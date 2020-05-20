import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Cohort } from '../../../../models';
import { useAPI } from '../../../../hooks';
import { CohortListItem } from './item.component';
import { useStyles } from './list.component.styles';

interface ListCohortsProps {
    className?: string;
}

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#3f51b5',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

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
                            <StyledTableCell>Select</StyledTableCell>
                            <StyledTableCell>Cohort Name</StyledTableCell>
                            <StyledTableCell>Children</StyledTableCell>
                            <StyledTableCell>Chapter</StyledTableCell>
                            <StyledTableCell>Flagged</StyledTableCell>
                            <StyledTableCell>Status</StyledTableCell>

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
