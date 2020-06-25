import React from 'react';
import { Link } from 'react-router-dom';
import { Button, TableRow, TableCell } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { Cohort, SelectableCohort } from '../../../../models';
import { useAPI } from '../../../../hooks';
// import { SelectableCohort } from './list.component';

// By Setting the cohort as SelectableCohort, we ensure that the cohort will
// be the same shape as all of the other instances of cohort, but with an
// additional 'selected' boolean to indicate when a checkbox has been selected
interface CohortListItemProps {
    cohort: SelectableCohort;
    onUpdate?: () => void;
    toggleItem: (cohortId: number) => void;
}

// individual table rows for http://localhost:3000/admin/dashboard/moderator

const CohortListItem: React.FC<CohortListItemProps> = ({ cohort, onUpdate, toggleItem }) => {
    return (
        <TableRow key={cohort.id}>
            <TableCell>
                <Checkbox
                    checked={cohort.selected}
                    onChange={() => toggleItem(cohort.id)}
                    color='primary'
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </TableCell>

            <TableCell>
                <Link to={`/admin/dashboard/cohort/${cohort.id}/details`}>{cohort.name}</Link>
            </TableCell>
            <TableCell>{cohort.week}</TableCell>
            <TableCell>{cohort.activity}</TableCell>
            {/* <TableCell>
                <Link to={`/admin/dashboard/cohort/${cohort.id}/edit`}>
                    <Button>Edit</Button>
                </Link>
            </TableCell>
            <TableCell>
                <Button onClick={() => remove()}>Delete</Button>
            </TableCell> */}
        </TableRow>
    );
};

export { CohortListItem };
