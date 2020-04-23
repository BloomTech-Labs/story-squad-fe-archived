import React from 'react';
import { Link } from 'react-router-dom';
import { ListCohorts } from '../../../../components';
import { Button, Typography } from '@material-ui/core';
import { useStyles } from './manage-page-styles';

const ManageCohortPage: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography variant='h4' gutterBottom>
                    Cohort Management
                </Typography>

                <Link to='/admin/dashboard/cohort/create'>
                    <Button>Create Cohort</Button>
                </Link>
            </div>
            <ListCohorts />
        </div>
    );
};

export { ManageCohortPage };
