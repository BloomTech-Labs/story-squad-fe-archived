import React from 'react';
import { useStyles } from './styles';
import Privacy from './privacy.main';
import PrivacyDrawer from './privacy.drarwer';

const PrivacyPolicy: React.FC = () => {
    const classes = useStyles({});
    return (
        <div className={classes.root}>
            <PrivacyDrawer />
            <Privacy />
        </div>
    );
};

export { PrivacyPolicy };
