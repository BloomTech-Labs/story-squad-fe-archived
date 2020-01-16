import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { findByLabelText } from '@testing-library/dom';

const ErrorPage = () => {
    const history = useHistory();
    return (
        <div id='error'>
            <h1 className='notFoundTitle'>OOPS...DON'T WORRY</h1>
            <div className='animation'>
                <SimpleSlide />
            </div>
            <h5 className='notFoundDesc'>
                The page you're looking for isn't available, but we'll help you continue your
                mission!
            </h5>
            <div>
                <Button onClick={history.goBack}>Let's go back</Button>
            </div>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        height: 180,
        float: 'right',
    },
    wrapper: {
        width: 400 + theme.spacing(2),
        display: 'flex',
        alignContent: 'flexEnd',
    },
}));

export default function SimpleSlide() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Slide direction='left' in={true} mountOnEnter unmountOnExit>
                    <img src={`${process.env.PUBLIC_URL}/assets/smile.png`} />
                </Slide>
            </div>
        </div>
    );
}

export { ErrorPage };
