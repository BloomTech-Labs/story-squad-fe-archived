import React from 'react';
import { MenuButton } from '../../reusable-components/menu-button/menu-button';
import { Typography, Grid } from '@material-ui/core';
import { useStyles } from './voting-header-styles';

interface HeaderProps {
    title?: string;
    homeTeam?: string;
    awayTeam?: string;
    submissionType: string;
}
const VotingHeader: React.FC<HeaderProps> = ({ submissionType }) => {
    const classes = useStyles();
    return (
        <Grid container direction='row' className={classes.appBar}>
            <div className={classes.headerMenuDiv}>
                <div className={classes.upperTitleDiv}>
                    <Typography className={classes.h4Styling} variant='h2'>
                        Vote for your favorite {submissionType}
                    </Typography>
                </div>
                <div className={classes.upperHeaderButtonDiv}>
                    <MenuButton />
                </div>
            </div>
        </Grid>
    );
};
export { VotingHeader };
