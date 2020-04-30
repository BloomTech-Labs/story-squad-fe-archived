import React from 'react';
import { MenuButton } from '../../reusable-components/menu-button/menu-button';
import { Typography, Grid } from '@material-ui/core';
import { useStyles } from './voting-header-styles';

interface HeaderProps {
    title?: string;
    homeTeam?: string;
    awayTeam?: string;
}
const VotingHeader: React.FC<HeaderProps> = ({ title }) => {
    const classes = useStyles();
    return (
        <Grid container direction='row' className={classes.appBar}>
            {/* <Grid className={classes.headerMenuDiv} container item> */}
            <div className={classes.headerMenuDiv}>
                <div className={classes.upperTitleDiv}>
                    <Typography className={classes.h4Styling} variant='h2'>
                        {/* {title} */}
                        Vote for your favorite Story
                    </Typography>
                </div>
                <div className={classes.upperHeaderButtonDiv}>
                    <MenuButton />
                </div>
            </div>
            {/* <div className={classes.teamName}>
                    <Typography className={classes.h4Styling}>{homeTeam}</Typography>
                    <Typography className={classes.h4Styling}>VS</Typography>
                    <Typography className={classes.h4Styling}>{awayTeam}</Typography> */}
            {/* </div> */}
            {/* <Typography className={classes.h3Styling}>201 Points Needed To Win!</Typography> */}
            {/* </Grid> */}
        </Grid>
    );
};
export { VotingHeader };
