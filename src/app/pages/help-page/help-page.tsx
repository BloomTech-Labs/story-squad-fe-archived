import React from 'react';
import { NavigationDrawer } from './../../components/dashboard/navigation/navigation.component';
import { useStyles } from './help-page-styling';

const HelpPage: React.FC = () => {
    const classes = useStyles({});
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
