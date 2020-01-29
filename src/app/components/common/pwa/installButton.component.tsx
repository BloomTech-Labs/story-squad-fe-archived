import React from 'react';

import { Button, CardHeader } from '@material-ui/core';
import { useAddToHomescreenPrompt } from '../../../hooks/pwa/usePWA.hook';
import { makeStyles } from '@material-ui/core/styles';

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

    if (!isVisible) {
        return <div />;
    }

    return (
        <CardHeader>
            <Button onClick={promptToInstall}>Yes</Button>
            <Button onClick={hide}>No</Button>
        </CardHeader>
    );
}

export { InstallButton };
