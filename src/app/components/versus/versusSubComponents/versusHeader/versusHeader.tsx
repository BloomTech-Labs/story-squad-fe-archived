import React from 'react';
import { MenuButton } from '../../../reusable-components';
import { Typography, Grid } from '@material-ui/core';
import { useStyles } from './versus-header-styles';

interface HeaderProps {
    title?: string;
    homeTeam: string;
    awayTeam: string;
    homeTeamPoints?: number;
    awayTeamPoints?: number;
}
const VersusHeader: React.FC<HeaderProps> = ({
    homeTeam,
    awayTeam,
    title,
    homeTeamPoints,
    awayTeamPoints,
}) => {
    const classes = useStyles();
    return (
        <Grid container direction='row' className={classes.appBar}>
            <Grid className={classes.headerMenuDiv} container item>
                <div className={classes.upperTitleDiv}>
                    <Typography className={classes.h2Styling} variant='h2'>
                        {title}
                    </Typography>
                </div>
                <div className={classes.upperHeaderButtonDiv}>
                    <MenuButton />
                </div>
                {/* The section below is where we are rendering the Team Names as well as the number of points each team earns */}
                <div className={classes.teamInfo}>
                    <div className={classes.teamName}>
                        <Typography className={classes.h4Styling}>{homeTeam}</Typography>
                        <Typography className={classes.h3Styling}>
                            Home Team Points: {homeTeamPoints}
                        </Typography>
                    </div>
                    <div className={classes.teamName}>
                        <Typography className={classes.h4Styling}>VS</Typography>
                    </div>
                    <div className={classes.teamName}>
                        <Typography className={classes.h4Styling}>{awayTeam}</Typography>
                        <Typography className={classes.h3Styling}>
                            Away Team Points: {awayTeamPoints}
                        </Typography>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};
export { VersusHeader };
