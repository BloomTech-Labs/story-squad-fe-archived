import React from 'react';
import { Link } from 'react-router-dom';

import { Button, TableRow, TableCell } from '@material-ui/core';

import { Cohort } from '../../../../models';
import { useAPI } from '../../../../hooks';
import { displayError } from '../../../../state';

interface CohortListItemProps {
    cohort: Cohort;
    onUpdate?: () => void;
}

const CohortListItem: React.FC<CohortListItemProps> = ({ cohort, onUpdate }) => {
    const [removeResponse, loading, remove] = useAPI(`/cohort/list/${cohort.id}`, 'DELETE');

    React.useEffect(() => {
        if (removeResponse?.message && onUpdate) onUpdate();
    }, [removeResponse, onUpdate]);

    return (
        <TableRow key={cohort.id}>
            <TableCell>{cohort.name}</TableCell>
            <TableCell>{cohort.week}</TableCell>
            <TableCell>{cohort.activity}</TableCell>
            <TableCell>
                <Link to={`/admin/dashboard/cohort/${cohort.id}/edit`}>
                    <Button>Edit</Button>
                </Link>
            </TableCell>
            <TableCell>
                <Button onClick={() => remove()}>Delete</Button>
            </TableCell>
        </TableRow>
    );
};

export { CohortListItem };
