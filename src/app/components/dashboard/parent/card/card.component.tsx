import React from 'react';

import { Button, Card, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Parent } from '../../../../models';
import { useAddToHomescreenPrompt } from '../../../common/pwa/pwa.component';

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

// let deferredPrompt;

// window.addEventListener('beforeinstallprompt', (e) => {
//     console.log(e);
//     e.preventDefault();
//     deferredPrompt = e;
// });

// async function install() {
//     if (deferredPrompt) {
//         deferredPrompt.prompt();
//         console.log(deferredPrompt);
//         deferredPrompt.userChoice.then(function(choiceResult) {
//             if (choiceResult.outcome === 'accepted') {
//                 console.log('Your PWA has been installed');
//             } else {
//                 console.log('User chose to not install your PWA');
//             }

//             deferredPrompt = null;
//         });
//     }
// }

interface ParentCardProps {
    className?: string;
    user: Parent;
}

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
            <Button onClick={hide}>Close</Button>
            Would You Like To Add Story Squad To Your Homescreen?
            <Button onClick={promptToInstall}>Add to homescreen</Button>
        </div>
    );
}

const ParentCard: React.FC<ParentCardProps> = ({ user, className }) => {
    const classes = useStyles({});
    const logout = () => window.dispatchEvent(new Event('logout'));

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
            <CardHeader className={classes.cardHeader} action={<InstallButton />} />
        </Card>
    );
};

export { ParentCard };
