import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from '../versus-styles';

const VersusButton: React.FC = () => {
    const classes = useStyles({});
    return (
        <Grid className={classes.btnContainer}>
            <Grid className={classes.btnDiv}>
                <Link to={`/kids-dashboard/team-join`}>
                    <Button className={classes.orangeButton} type='button'>
                        Back
                    </Button>
                </Link>
                <Link to={`/kids-dashboard/nextpage`}>
                    <Button className={classes.orangeButton} type='submit'>
                        Vote
                    </Button>
                </Link>
            </Grid>
        </Grid>
    );
};

export { VersusButton };
