import React from 'react';
import useStyles from './tos.styles';
import TosMain from './tos.main';
import ToSDrawer from './tos.drawer';

const ToS: React.FC = () => {
    const classes = useStyles({});

    return (
        <div className={classes.root}>
            <ToSDrawer />
            <TosMain />
        </div>
    );
};

export { ToS };
