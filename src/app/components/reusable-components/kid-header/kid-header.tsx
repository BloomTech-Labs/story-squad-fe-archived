import React from 'react';
import { MenuButton } from '../menu-button/menu-button';
import { Typography, Grid } from '@material-ui/core';
import { useStyles } from './kid-header-styles';

interface HeaderProps {
    title?: string;
}
const KidHeader: React.FC<HeaderProps> = ({ title }) => {
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
            </Grid>
        </Grid>
    );
};
export { KidHeader };
