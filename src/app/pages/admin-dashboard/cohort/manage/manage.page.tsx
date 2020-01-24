import React from 'react';
import { Link } from 'react-router-dom';
import { ListCohorts } from '../../../../components/admin-dashboard/cohort/list/list.component';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '35vh',
        width: '100%',
        maxWidth: '80ch',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    loading: {
        marginLeft: '1ch',
    },
}));

const ManageCohortPage: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography variant='h4' gutterBottom>
                    Cohort Management
                </Typography>
            </div>
            <Link to='/admin/dashboard/create-cohort'>
                <Button>Create Cohort</Button>
            </Link>
            <ListCohorts />
        </div>
    );
};

export { ManageCohortPage };
