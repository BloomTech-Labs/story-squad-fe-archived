import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './header-styles';
import { MenuButton } from '../../reusable-components/menu-button/menu-button';

interface PointsProps {
    remainingPoints: number;
    teamReviewTime: Date;
    disabledForm: boolean;
}

export const Header: React.FC<PointsProps> = ({
    remainingPoints,
    teamReviewTime,
    disabledForm,
}) => {
    const classes = useStyles({});
    const TimeTill = Math.floor(((teamReviewTime.getTime() - Date.now()) / (1000 * 60 * 60)) % 24);

    return (
        <>
            <Grid container direction='row' className={classes.appBar}>
                <Grid container item justify='space-around' alignItems='center'>
                    <Grid item xs={12} md={6}>
                        <Typography className={classes.h2Styling} variant='h2'>
                            Point Share
                        </Typography>
                        <Typography className={classes.h3Styling} variant='h3'>
                            {`${TimeTill} Hours left`}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.remaining}>
                        {disabledForm === false ? (
                            <Typography className={classes.h3Styling}>
                                Total Points Remaining:
                                {remainingPoints < 0 || remainingPoints > 100 ? (
                                    <div className={classes.red}> Total must equal 100 </div>
                                ) : (
                                    <div>{remainingPoints}</div>
                                )}
                            </Typography>
                        ) : (
                            <div className={classes.pointsWaiting}>
                                <Typography className={classes.h3Styling}>
                                    All Points Allocated!
                                </Typography>
                            </div>
                        )}
                        <div className={classes.menuBtn}>
                            <MenuButton />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};
