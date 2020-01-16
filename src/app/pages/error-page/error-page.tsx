import React, { Component } from 'react';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const ErrorPage = () => {
    const history = useHistory();
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <div className={classes.toolbar} />
            <Typography variant='h6' component='h6'>
                Story Squad
            </Typography>
            <br />
            <Typography variant='h3' component='h3'>
                OOPS...DON'T WORRY
            </Typography>
            <br />
            <div className='animation'>
                <SimpleSlide />
            </div>
            <Typography variant='h6' component='h6'>
                The page you're looking for isn't available, but we'll help you continue your
                mission!
            </Typography>
            <br />
            <div>
                <Button variant='contained' color='primary' onClick={history.goBack}>
                    Let's go back
                </Button>
            </div>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        height: 180,
        float: 'right',
        marginRight: 100,
    },
    wrapper: {
        width: 400 + theme.spacing(2),
        display: 'flex',
        alignContent: 'flexEnd',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
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
