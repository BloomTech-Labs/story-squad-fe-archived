import React, { useState, useEffect } from 'react';
import {
    Checkbox,
    Table,
    TableHead,
    TableBody,
    TableFooter,
    TableRow,
    TableCell,
    TablePagination,
} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Cohort, SelectableCohort } from '../../../../models';
import { useAPI } from '../../../../hooks';
import { CohortListItem } from './item.component';
import { useStyles } from './list.component.styles';
import requestFactory from '../../../../util/requestFactory';

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
    const [response, loading, request] = useAPI<{ cohorts: SelectableCohort[] }>('/cohort/list');
    const classes = useStyles({});
    const [cohorts, setCohorts] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const history = useHistory();

    useEffect(() => {
        if (!loading && response) {
            setCohorts(response.cohorts);
        }
    }, [loading, response]);

    const toggleItem = (cohortId) => {
        const newCohorts = cohorts.map((cohort) => {
            if (cohortId === cohort.id) {
                return {
                    ...cohort,
                    selected: !cohort.selected,
                };
            } else {
                return cohort;
            }
        });
        setCohorts(newCohorts);
    };

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    if (loading) return <h4 className={classes.loading}>Loading...</h4>;
    if (cohorts.length < 1) return <h4 className={classes.loading}>There are no Cohorts</h4>;
    return (
        <div className={className}>
            <div className={classes.header}>
                <div>
                    <Link to='/admin/dashboard/cohort/create'>
                        <Button className={classes.button} color='primary' variant='contained'>
                            Create Cohort
                        </Button>
                    </Link>

                    <Button
                        className={classes.button}
                        color='primary'
                        variant='contained'
                        onClick={(e) => {
                            const selectedCohorts = cohorts.filter((cohort) => cohort.selected);

                            if (selectedCohorts.length > 1) {
                                window.alert('Only one cohort can be edited at a time.');
                            } else if (selectedCohorts.length === 0) {
                                window.alert('Please select a cohort to edit');
                            } else {
                                history.push(
                                    `/admin/dashboard/cohort/${selectedCohorts[0].id}/edit`
                                );
                            }
                        }}>
                        Edit
                    </Button>

                    <Button
                        color='primary'
                        variant='contained'
                        onClick={(e) => {
                            if (window.confirm('Are you sure you wish to delete this item?')) {
                                const axios = requestFactory();
                                const selectedCohorts = cohorts.filter((cohort) => cohort.selected);
                                const deletePromises = selectedCohorts.map((cohort) => {
                                    return axios.delete(`/cohort/list/${cohort.id}`);
                                });
                                Promise.all(deletePromises)
                                    .then((res) => {
                                        request();
                                    })
                                    .catch((err) => {
                                        window.alert('There was a problem deleting the cohort(s).');
                                    });
                            }
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {cohorts.map((cohort) => (
                            <CohortListItem
                                key={cohort.id}
                                cohort={cohort}
                                toggleItem={toggleItem}
                            />
                        ))} */}
                        {cohorts
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((cohort) => {
                                return (
                                    <CohortListItem
                                        key={cohort.id}
                                        cohort={cohort}
                                        toggleItem={toggleItem}
                                    />
                                );
                            })}
                    </TableBody>

                    <TablePagination
                        count={100}
                        page={page}
                        onChangePage={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Table>
            </div>
        </div>
    );
};

export { ListCohorts };
