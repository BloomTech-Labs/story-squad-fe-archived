import React from 'react';
import { Link } from 'react-router-dom';
import { ListCohorts } from '../../../../components';
import { Button, Typography } from '@material-ui/core';
import { useStyles } from './manage-page-styles';
import { useAPI } from '../../../../hooks/index';
import { Cohort } from '../../../../models/index';

interface CohortListItemProps {
    cohort: Cohort;
    onUpdate?: () => void;
}

const ManageCohortPage: React.FC<CohortListItemProps> = ({ cohort, onUpdate }) => {
    // const [removeResponse, loading, remove] = useAPI(`/cohort/list/${cohort.id}`, 'DELETE');
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography variant='h4' gutterBottom>
                    Cohort Management
                </Typography>

                {/* <Link to='/admin/dashboard/cohort/create'>
                    <Button>Create Cohort</Button>
                </Link> */}
                {/* <Link to={`/admin/dashboard/cohort/${cohort.id}/edit`}>
                    <Button>Edit</Button>
                </Link>
                <Button onClick={() => remove()}>Delete</Button> */}
            </div>
            <ListCohorts />
        </div>
    );
};

export { ManageCohortPage };
