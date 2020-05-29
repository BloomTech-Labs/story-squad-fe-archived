import React from 'react';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStyles } from './versus-button-styles';
import Button from '../../../reusable-components/button/Button';

interface LockedState {
    locked: boolean;
}

const VersusButton: React.FC<LockedState> = ({ locked }) => {
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
                {locked === true ? (
                    <Button
                        className={classes.orangeButton}
                        onClick={() => history.push(`/voting`)}>
                        Vote
                    </Button>
                ) : (
                    <Button
                        className={classes.orangeButton}
                        onClick={() => history.push(`/waiting-page`)}>
                        Next
                    </Button>
                )}
            </Grid>
        </Grid>
    );
};

export { VersusButton };
