import React from 'react';

import { Button, Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Parent } from '../../../../models';
import { InstallButton } from '../../../common/pwa/installButton.component';

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

interface ParentCardProps {
    className?: string;
    user: Parent;
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
                title='Welcome!'
                subheader={
                    <>
                        <Typography>Let's see how each participant is doing this week.</Typography>
                        <InstallButton />
                    </>
                }
            />
        </Card>
    );
};

export { ParentCard };
