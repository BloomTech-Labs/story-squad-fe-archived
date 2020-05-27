import React from 'react';
import { MenuButton } from '../../reusable-components/menu-button/menu-button';
import { Typography, Grid } from '@material-ui/core';
import { useStyles } from '../waiting-page-styles';

interface HeaderProps {
    title?: string;
}
const WaitingHeader: React.FC<HeaderProps> = ({ title }) => {
    const classes = useStyles();
    return (
        <Grid container direction='row' className={classes.appBar}>
            <Grid className={classes.headerMenuDiv} container item>
                <div className={classes.upperTitleDiv}>
                    <Typography className={classes.h2Styling} variant='h2'>
                        STORY SQUAD
                    </Typography>
                </div>
                <div className={classes.upperHeaderButtonDiv}>
                    <MenuButton />
                </div>
            </Grid>
        </Grid>
    );
};
export { WaitingHeader };
