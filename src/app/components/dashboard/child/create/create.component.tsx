import React from 'react';

import {
    Card,
    CardContent,
    CircularProgress,
    Fab,
    Icon,
    TextField,
    CardHeader,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import { Child } from '../../../../models';
import { childListRefresh } from '../../../../state';
import { useAPI, useForm } from '../../../../hooks';

const useStyles = makeStyles((theme) => ({
    header: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
    },
    content: {
        display: 'grid',
        gridGap: theme.spacing(3),
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
}));

interface ChildCreateProps {
    onCreate: (child: Child) => void;
}

const ChildCreate: React.FC<ChildCreateProps> = ({ onCreate }) => {
    const classes = useStyles({});

    const { request, response, loading, error } = useAPI('/children', { method: 'POST' });
    const { state, handleInputChange, handleSubmitBuilder } = useForm({ username: '', grade: 3 });
    const handleChange = handleSubmitBuilder(request);

    React.useEffect(() => {
        if (response) childListRefresh();
        if (response && onCreate) onCreate(response);
    }, [response, onCreate]);

    const { username, grade } = state;
    return (
        <form onSubmit={handleChange}>
            <Card>
                <CardHeader className={classes.header} title='Add Child' />
                <CardContent className={classes.content}>
                    <TextField
                        type='text'
                        label='Username'
                        required
                        value={username}
                        onChange={handleInputChange('username')}
                    />

                    <TextField
                        type='number'
                        label='Grade (3-6)'
                        required
                        value={grade}
                        onChange={handleInputChange('grade')}
                    />
                </CardContent>
            </Card>
            <div className={classes.wrapper}>
                <Fab aria-label='save' color='primary' type='submit'>
                    <Icon>save</Icon>
                </Fab>
                {loading && <CircularProgress size={68} className={classes.buttonProgress} />}
            </div>
        </form>
    );
};

export { ChildCreate };
