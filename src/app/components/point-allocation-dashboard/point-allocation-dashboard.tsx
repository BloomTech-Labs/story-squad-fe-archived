import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import { Points } from '../../models';
import { useForm } from '../../hooks';

const useStyles = makeStyles({
    dashboardHeader: {
        backgroundColor: '#004775',
    },
    centerText: {
        justifyContent: 'space-around',
        padding: '50px',
    },
});

const PointDashboard: React.FC = () => {
    const { state, handleInputChange, handleSubmitBuilder } = useForm({
        story1Points: 10,
        story2Points: 10,
        pic1Points: 10,
        pic2Points: 10,
    });
    const [remainingPoints, setRemainingPoints] = useState(60);

    useEffect(() => {
        setRemainingPoints(
            100 - (state.story1Points + state.story2Points + state.pic1Points + state.pic2Points)
        );
    }, [state]);

    const classes = useStyles({});

    return (
        <div>
            <AppBar position='static' className={classes.dashboardHeader}>
                <Toolbar className={classes.centerText}>
                    <Typography variant='h2'>Point Share</Typography>
                    <Typography variant='h3'>Point Remaining: {remainingPoints}</Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth='md'>
                <span>
                    Story 1
                    <TextField
                        required
                        autoFocus
                        name='story1Points'
                        onChange={handleInputChange('story1Points')}
                        value={state.story1Points}
                        type='number'
                    />
                </span>
                <span>
                    Story 2
                    <TextField
                        required
                        autoFocus
                        name='story2Points'
                        onChange={handleInputChange('story2Points')}
                        value={state.story2Points}
                        type='number'
                    />
                </span>

                <span>
                    Pic 1
                    <TextField
                        required
                        autoFocus
                        name='pic1Points'
                        onChange={handleInputChange('pic1Points')}
                        value={state.pic1Points}
                        type='number'
                    />
                </span>
                <span>
                    Pic 2
                    <TextField
                        required
                        autoFocus
                        name='pic2Points'
                        onChange={handleInputChange('pic2Points')}
                        value={state.pic2Points}
                        type='number'
                    />
                </span>
            </Container>
        </div>
    );
};

export { PointDashboard };
