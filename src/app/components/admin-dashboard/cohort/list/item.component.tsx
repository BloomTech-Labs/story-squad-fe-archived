import React from 'react';
import { Link } from 'react-router-dom';
import { Button, TableRow, TableCell } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { Cohort, SelectableCohort } from '../../../../models';
import { useAPI } from '../../../../hooks';
// import { SelectableCohort } from './list.component';

interface CohortListItemProps {
    cohort: SelectableCohort;
    onUpdate?: () => void;
    toggleItem: (cohortId: number) => void;
}

const CohortListItem: React.FC<CohortListItemProps> = ({ cohort, onUpdate, toggleItem }) => {
    // const [removeResponse, loading, remove] = useAPI(`/cohort/list/${cohort.id}`, 'DELETE');

    // React.useEffect(() => {
    //     if (removeResponse?.message && onUpdate) onUpdate();
    // }, [removeResponse, onUpdate]);

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
            <TableCell>{cohort.name}</TableCell>
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
