import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import cityscape from '../../child-dashboard/kid-progress/icons/cityscape.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        h2Styling: {
            'fontFamily': 'Bangers',
            'color': '#FFFFFF',
            'fontSize': '86px',
            'fontWeight': 'bold',
            'textAlign': 'center',
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': '#000000',
            [theme.breakpoints.down('sm')]: {
                fontSize: '42px',
            },
        },
        h3Styling: {
            'fontFamily': 'Bangers',
            'color': '#FFFFFF',
            'fontSize': '48px',
            'fontWeight': 'bold',
            'textAlign': 'center',
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': '#000000',
            [theme.breakpoints.down('sm')]: {
                fontSize: '32px',
            },
        },
        red: {
            color: 'red',
        },
        appBar: {
            height: '200px',
            width: '100%',
            backgroundColor: '#6CEAE6',
            backgroundImage: `url(${cityscape})`,
            backgroundRepeat: 'no-repeat',
            border: '7px solid #000000',
            backgroundSize: '101% 103%',
            display: 'flex',
            justifyContent: 'center',
        },
    })
);

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
