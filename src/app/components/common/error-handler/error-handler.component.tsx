import React from 'react';

import { Snackbar } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';

import { ErrorContext, displayError } from '../../../state';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        'width': '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const ErrorHandler: React.FC = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const error = React.useContext(ErrorContext);

    React.useEffect(() => {
        if (error) setOpen(true);
    }, [error]);

    const handleClose = () => {
        setOpen(false);
        setTimeout(() => displayError(undefined), 150);
    };

    return (
        <div className={classes.root}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert elevation={6} variant='filled' onClose={handleClose} severity='error'>
                    {error}
                </Alert>
            </Snackbar>
        </div>
    );
};

export { ErrorHandler };
