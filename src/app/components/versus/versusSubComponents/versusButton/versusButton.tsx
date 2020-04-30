import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStyles } from './versus-button-styles';

const VersusButton: React.FC = () => {
    const history = useHistory();
    const classes = useStyles({});
    return (
        <Grid className={classes.btnContainer}>
            <Grid className={classes.btnDiv}>
                <Button
                    className={classes.orangeButton}
                    onClick={() => history.push(`/kids-dashboard/team-join`)}>
                    Back
                </Button>
                <Button className={classes.orangeButton} onClick={() => history.push(`/voting`)}>
                    Vote
                </Button>
            </Grid>
        </Grid>
    );
};

export { VersusButton };
