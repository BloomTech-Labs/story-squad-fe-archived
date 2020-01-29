import React from 'react';

import { Button, CardHeader } from '@material-ui/core';
import { useAddToHomescreenPrompt } from '../../../hooks/pwa/usePWA.hook';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {},
    cardHeader: {
        '& .MuiCardHeader-action': {
            [theme.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    },
}));

function InstallButton() {
    const [prompt, promptToInstall] = useAddToHomescreenPrompt();
    const [isVisible, setVisibleState] = React.useState(false);

    const hide = () => setVisibleState(false);

    React.useEffect(() => {
        console.log(prompt);
        if (prompt) {
            setVisibleState(true);
        }
    }, [prompt]);

    const classes = useStyles({});

    if (!isVisible) {
        return <div />;
    }

    return (
        <CardHeader
            className={classes.cardHeader}
            subheader='Would You Like to Add Story Squad to Your Homescreen?'>
            <Button onClick={promptToInstall}>Yes</Button>
            <Button onClick={hide}>No</Button>
        </CardHeader>
    );
}

export { InstallButton };
