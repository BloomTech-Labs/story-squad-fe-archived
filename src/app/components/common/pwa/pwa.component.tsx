import * as React from 'react';

interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[];
    readonly userChoice: Promise<{
        outcome: 'accepted' | 'dismissed';
        platform: string;
    }>;
    prompt(): Promise<void>;
}

function useAddToHomescreenPrompt(): [BeforeInstallPromptEvent | null, () => void] {
    const [prompt, setState] = React.useState<BeforeInstallPromptEvent | null>(null);

    const promptToInstall = () => {
        if (prompt) {
            return prompt.prompt();
        }
        return Promise.reject(
            new Error('Tried installing before browser sent "beforeinstallprompt" event')
        );
    };

    React.useEffect(() => {
        const ready = (e: BeforeInstallPromptEvent) => {
            e.preventDefault();
            setState(e);
        };

        window.addEventListener('beforeinstallprompt', ready as any);

        return () => {
            window.removeEventListener('beforeinstallprompt', ready as any);
        };
    }, []);

    return [prompt, promptToInstall];
}

export { useAddToHomescreenPrompt };
