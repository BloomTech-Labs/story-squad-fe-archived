import React from 'react';

import { BeforeInstallPromptEvent } from '../../../models';

const PWAContext = React.createContext<BeforeInstallPromptEvent | undefined>(undefined);
const PWAProvider: React.FC = ({ children }) => {
    const [event, setEvent] = React.useState<BeforeInstallPromptEvent>();

    React.useEffect(() => {
        const captureEvent = (e: BeforeInstallPromptEvent) => {
            if (!e.prompt) return;
            e.preventDefault();
            setEvent(e);
        };

        window.addEventListener('beforeinstallprompt', captureEvent);
        return () => window.removeEventListener('beforeinstallprompt', captureEvent);
    }, []);

    return <PWAContext.Provider value={event}>{children}</PWAContext.Provider>;
};

export { PWAContext, PWAProvider };
