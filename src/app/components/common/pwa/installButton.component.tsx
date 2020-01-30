import React from 'react';

import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { PWAContext } from '../../../state';

const useStyles = makeStyles((theme) => ({
    root: {},
}));

const InstallButton: React.FC = () => {
    const classes = useStyles({});
    const promptEvent = React.useContext(PWAContext);
    const [isVisible, setVisibleState] = React.useState(false);

    const hide = () => setVisibleState(false);

    React.useEffect(() => {
        if (promptEvent) {
            setVisibleState(true);
            promptEvent.userChoice?.then((platform?, outcome?) => {
                setVisibleState(false);
            });
        }
    }, [promptEvent]);

    const promptToInstall = () => {
        if (promptEvent?.prompt) return promptEvent.prompt();
        throw new Error('Tried installing before browser sent "beforeinstallprompt" event');
    };

    if (!isVisible) return <div />;
    return (
        <div className={classes.root}>
            <Typography variant='body1' color='textSecondary'>
                Would you like to add Story Squad to your homescreen?
            </Typography>
            <Button color='secondary' onClick={promptToInstall}>
                Install
            </Button>
            <Button onClick={hide}>No thanks</Button>
        </div>
    );
};

export { InstallButton };
