import React from 'react';
import { NavigationDrawer } from './../../components/dashboard/navigation/navigation.component';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-nunito';
import 'typeface-bangers';

const useStyles = makeStyles((theme) => ({
    centerDiv: {
        width: '50%',
        paddingLeft: '200px',
        margin: '0 auto',
        fontFamily: 'nunito',
    },
    flex: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    helpFont: {
        'textAlign': 'center',
        'marginTop': '32px',
        'marginBottom': '-50px',
        'fontFamily': 'bangers',
        'color': '#0267C1',
        'fontSize': '48px',
        '-webkit-text-stroke-width': '1px',
        '-webkit-text-stroke-color': '#ff6d3a',
    },
    normalWeight: {
        fontWeight: 'normal',
    },
}));

const HelpPage: React.FC = () => {
    const classes = useStyles();
    return (
        <>
            <NavigationDrawer />
            <h1 className={classes.helpFont}>Help</h1>
            <div className={classes.flex}>
                <div className={classes.centerDiv}>
                    <h1 className={classes.normalWeight}>Contact Us</h1>
                    <h2 className={classes.normalWeight}>Email us: email@storysquad.com</h2>
                    <h2 className={classes.normalWeight}>Call us: 800 555 5555</h2>
                </div>
            </div>
        </>
    );
};

export { HelpPage };
