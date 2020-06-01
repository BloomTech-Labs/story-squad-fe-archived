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
import { Cohort, ChildrenInCohort } from '../../../../models';
import { useAPI } from '../../../../hooks';
//import { CohortListItem } from './item.component';
//import { useStyles } from './list.component.styles';
import requestFactory from '../../../../util/requestFactory';
import { StudentDetail } from './student-details.component';

interface CohortDetailsProps {
    className?: string;
    id?: string;
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

// http://localhost:3000/admin/dashboard/cohort/:id/details

const CohortDetails: React.FC<CohortDetailsProps> = ({ className, id }) => {
    const [response, loading, request] = useAPI<{ cohort: ChildrenInCohort[] }>(
        `/cohort/list/${id}/children`
    );
    const [cohort, setCohort] = useState<ChildrenInCohort>();

    useEffect(() => {
        if (!loading && response) {
            setCohort(response.cohort[0]);
        }
    }, [loading, response]);

    console.log(cohort);

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
            <h1>Submissions</h1>
            <h2>{cohort && cohort.name}</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Student Names</StyledTableCell>
                        <StyledTableCell>Stories</StyledTableCell>
                        <StyledTableCell>Drawing</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cohort &&
                        cohort.children
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((child: any) => {
                                return <StudentDetail key={child.id} child={child} />;
                            })}
                    <TablePagination
                        count={100}
                        page={page}
                        onChangePage={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </TableBody>
            </Table>
        </div>
    );
};

export { CohortDetails };
