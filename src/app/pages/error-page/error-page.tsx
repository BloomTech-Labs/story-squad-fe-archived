import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

class ErrorPage extends Component {
    render() {
        return (
            <div id='error'>
                <h1 className='notFoundTitle'>Oops! That page can’t be found.</h1>
                <p className='notFoundDesc'>
                    It looks like nothing was found at this location. Maybe try one of the links in
                    the menu or press back to go to the previous page.
                </p>
            </div>
        );
    }
}

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
