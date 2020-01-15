import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const ErrorPage = () => {
    const history = useHistory();
    return (
        <div id='error'>
            <h1 className='notFoundTitle'>Oops... Don't Worry</h1>
            <p className='notFoundDesc'>
                The page you're looking for isn't available, but we'll help you continue your
                mission!
            </p>
            <div>
                <Button onClick={history.goBack}>Let's go back</Button>
            </div>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        height: 180,
    },
    wrapper: {
        width: 100 + theme.spacing(2),
    },
    paper: {
        zIndex: 1,
        position: 'relative',
        margin: theme.spacing(1),
    },
    svg: {
        width: 100,
        height: 100,
    },
    polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
    },
}));

function SimpleSlide() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <FormControlLabel
                    control={<Switch checked={checked} onChange={handleChange} />}
                    label='Show'
                />
                <Slide direction='up' in={checked} mountOnEnter unmountOnExit>
                    <Paper elevation={4} className={classes.paper}>
                        <svg className={classes.svg}>
                            <polygon points='0,100 50,00, 100,100' className={classes.polygon} />
                        </svg>
                    </Paper>
                </Slide>
            </div>
        </div>
    );
}

export { ErrorPage };
