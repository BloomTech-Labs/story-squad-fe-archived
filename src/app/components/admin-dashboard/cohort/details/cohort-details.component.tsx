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
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Cohort, SelectableCohort } from '../../../../models';
import { useAPI } from '../../../../hooks';
//import { CohortListItem } from './item.component';
//import { useStyles } from './list.component.styles';
import requestFactory from '../../../../util/requestFactory';

interface CohortDetailsProps {
    className?: string;
    id?: number;
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

const CohortDetails: React.FC<CohortDetailsProps> = ({ className, id }) => {
    const [response, loading, request] = useAPI<{ cohorts: SelectableCohort[] }>(
        `/cohort/list/${id}/children`
    );
    console.log('This is the response!', response);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

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

    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Student Names</StyledTableCell>
                        <StyledTableCell>Stories</StyledTableCell>
                        <StyledTableCell>Drawing</StyledTableCell>
                    </TableRow>
                </TableHead>
                {/* <TableBody>
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
                    </TableBody> */}

                <TablePagination
                    count={100}
                    page={page}
                    onChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Table>
        </div>
    );
};

export { CohortDetails };
