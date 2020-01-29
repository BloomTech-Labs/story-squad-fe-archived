import * as React from 'react';
import { BeforeInstallPromptEvent } from '../../models/BeforeInstall';

function useAddToHomescreenPrompt(): [BeforeInstallPromptEvent | undefined, () => void] {
    const [event, setEvent] = React.useState<BeforeInstallPromptEvent>();

    const promptToInstall = () => {
        if (event?.prompt) return event.prompt();
        throw new Error('Tried installing before browser sent "beforeinstallprompt" event');
    };

    React.useEffect(() => {
        const captureEvent = (e: BeforeInstallPromptEvent) => {
            if (!e.prompt) return;
            e.preventDefault();
            setEvent(e);
        };

        window.addEventListener('beforeinstallprompt', captureEvent);
        return () => window.removeEventListener('beforeinstallprompt', captureEvent);
    }, []);

    return [event, promptToInstall];
}

export { useAddToHomescreenPrompt };
