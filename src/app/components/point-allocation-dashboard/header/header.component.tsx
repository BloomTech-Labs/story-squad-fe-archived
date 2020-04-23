import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './header-styles';

interface PointsProps {
    remainingPoints: number;
}

export const Header: React.FC<PointsProps> = ({ remainingPoints }) => {
    const classes = useStyles({});
    return (
        <>
            <Grid container direction='row' className={classes.appBar}>
                <Grid container item justify='space-around' alignItems='center'>
                    <Grid item xs={12} md={6}>
                        <Typography className={classes.h2Styling} variant='h2'>
                            Point Share
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography className={classes.h3Styling}>
                            Total Points Remaining:
                            {remainingPoints < 0 || remainingPoints > 100 ? (
                                <div className={classes.red}> Total must equal 100 </div>
                            ) : (
                                <div>{remainingPoints}</div>
                            )}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};
