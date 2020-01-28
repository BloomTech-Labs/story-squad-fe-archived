import React from 'react';

import { Button, Card, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Parent } from '../../../../models';

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

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
});

async function install() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        console.log(deferredPrompt);
        deferredPrompt.userChoice.then(function(choiceResult) {
            if (choiceResult.outcome === 'accepted') {
                console.log('Your PWA has been installed');
            } else {
                console.log('User chose to not install your PWA');
            }

            deferredPrompt = null;
        });
    }
}

interface ParentCardProps {
    className?: string;
    user: Parent;
}

const ParentCard: React.FC<ParentCardProps> = ({ user, className }) => {
    const classes = useStyles({});
    const logout = () => window.dispatchEvent(new Event('logout'));
    const install = () => window.dispatchEvent(new Event('install'));

    return (
        <Card className={`${className} ${classes.card}`}>
            <CardHeader
                className={classes.cardHeader}
                action={
                    <Button aria-label='logout' onClick={() => logout()}>
                        logout
                    </Button>
                }
                title='Welcome back!'
                subheader="Let's see how each participant is doing this week."
            />
            <CardHeader
                className={classes.cardHeader}
                action={
                    <Button aria-label='install' onClick={() => install()}>
                        install
                    </Button>
                }
            />
        </Card>
    );
};

export { ParentCard };
