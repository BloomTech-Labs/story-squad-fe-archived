import React from 'react';

import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAddToHomescreenPrompt } from '../../../hooks';

const useStyles = makeStyles((theme) => ({
    root: {},
}));

function InstallButton() {
    const classes = useStyles({});
    const [prompt, promptToInstall] = useAddToHomescreenPrompt();
    const [isVisible, setVisibleState] = React.useState(true);

    const hide = () => setVisibleState(false);

    React.useEffect(() => {
        console.log(prompt);
        if (prompt) {
            setVisibleState(true);
        }
    }, [prompt]);

    if (!isVisible) {
        return <div />;
    }

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
}

export { InstallButton };
