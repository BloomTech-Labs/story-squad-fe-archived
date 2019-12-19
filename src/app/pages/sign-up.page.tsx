import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    sidebar: {
        flexGrow: 1,
        height: '100vh',
        margin: 0,
    },
});

const SignUpPage: React.FC = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Grid container direction='row' justify='flex-end' alignItems='stretch'>
            <Grid item xs={4}>
                <Paper className={classes.sidebar}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor='primary'
                        textColor='primary'
                        centered>
                        <Tab label='Item One' />
                        <Tab label='Item Two' />
                        <Tab label='Item Three' />
                    </Tabs>
                </Paper>
            </Grid>
        </Grid>
    );
};

export { SignUpPage };
