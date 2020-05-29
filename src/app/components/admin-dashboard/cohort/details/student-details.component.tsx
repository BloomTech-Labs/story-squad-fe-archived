import React from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import { Button, TableRow, TableCell } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { Cohort, SelectableCohort } from '../../../../models';
import { useAPI } from '../../../../hooks';
// import { SelectableCohort } from './list.component';

interface ChildListItemProps {
    child: {
        avatar: null;
        grade: number;
        id: number;
        losses: null;
        username: string;
        preferences: {};
        progress: {};
        subscription: boolean;
        total_points: number;
        votes: number;
        wins: number;
    };
    onUpdate?: () => void;
    key: number;
    // toggleItem: (cohortId: number) => void;
}

const StudentDetail: React.FC<ChildListItemProps> = ({ key, child }) => {
    const [response, loading, request] = useAPI<{ cohorts: SelectableCohort[] }>(
        `/storyroutes/children/${child.id}/`
    );

    const route = useRouteMatch();

    return (
        <TableRow key={key}>
            <TableCell>{child.username}</TableCell>
            <TableCell>
                <Link to={`/admin/dashboard/cohort/${child.id}/details/story`}>View Story</Link>
            </TableCell>

            <TableCell>
                <Link to={`/admin/dashboard/cohort/${child.id}/details/drawing`}>View Drawing</Link>
            </TableCell>
        </TableRow>
    );
};

export { StudentDetail };
