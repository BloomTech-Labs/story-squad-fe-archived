import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    sidebar: {
        flexGrow: 1,
        height: '100vh',
        margin: 0,
    },
    tabs: {
        margin: '40px 52px',
    },
});

const SignUpPage: React.FC = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('sign-up');

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Grid container direction='row' justify='flex-end' alignItems='stretch'>
            <Grid item xs={4}>
                <Paper className={classes.sidebar}>
                    <Tabs
                        className={classes.tabs}
                        value={value}
                        onChange={handleChange}
                        indicatorColor='primary'
                        textColor='primary'
                        centered
                        variant='fullWidth'>
                        <Tab value='sign-up' label='Sign Up' />
                        <Tab value='sign-in' label='Sign In' />
                    </Tabs>
                    {value === 'sign-up' && <Typography variant='h3'>Sign Up</Typography>}
                    {value === 'sign-in' && <Typography variant='h3'>Sign In</Typography>}
                </Paper>
            </Grid>
        </Grid>
    );
};

export { SignUpPage };
