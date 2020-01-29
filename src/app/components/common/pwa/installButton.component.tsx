import React from 'react';

import { Button } from '@material-ui/core';
import { useAddToHomescreenPrompt } from '../../../hooks/pwa/usePWA.hook';

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
        <div>
            Would You Like To Add Story Squad To Your Homescreen?
            <br />
            <Button onClick={promptToInstall}>Yes</Button>
            <Button onClick={hide}>No</Button>
        </div>
    );
}

export { InstallButton };
