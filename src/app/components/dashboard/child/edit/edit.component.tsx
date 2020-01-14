import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import {
    Fab,
    TextField,
    Icon,
    Card,
    CardContent,
    CardHeader,
    Typography,
    Switch,
    FormControlLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAPI, useForm } from '../../../../hooks';

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    form: {
        display: 'grid',
        gridGap: theme.spacing(3),
    },
    preferences: {
        display: 'grid',
        gridGap: theme.spacing(3),
        gridTemplateColumns: 'repeat(auto-fit, 250px)',
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(3),
        right: theme.spacing(3),
    },
}));

interface ChildEdit {
    newChild?: boolean;
}

const ChildEdit: React.FC<ChildEdit> = ({ newChild }) => {
    const classes = useStyles();
    const history = useHistory();
    const { id } = useParams();

    const { request: fetch, response: fetchResponse } = useAPI(`/children/${id}`);
    const { request: update, response: updateResponse } = useAPI(`/children/${id}`, 'PUT');

    const { state: child, setState: setChild, handleInputChange: handleChildChange } = useForm({
        username: '',
        grade: 0,
    });

    const {
        state: preferences,
        setState: setPreferences,
        handleBoolChange: handlePreferenceChange,
    } = useForm({
        dyslexia: false,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        update({
            ...child,
            preferences: {
                ...preferences,
            },
        });
    };

    React.useEffect(() => {
        fetch();
    }, [fetch]);

    React.useEffect(() => {
        if (!fetchResponse) return;
        const { id, ...child } = fetchResponse.child;
        setChild({ ...child });
        setPreferences({ ...child.preferences });
    }, [fetchResponse, setChild, setPreferences]);

    React.useEffect(() => {
        if (updateResponse) history.push('/dashboard');
    }, [history, updateResponse]);

    if (!fetchResponse) return <div></div>;

    const { username, grade } = child;
    const { dyslexia } = preferences;
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Card>
                    <CardHeader
                        className={classes.header}
                        title={<Typography variant='h5'>{username}</Typography>}
                    />
                    <CardContent className={classes.form}>
                        <TextField
                            type='number'
                            label='Grade'
                            required
                            value={grade}
                            onChange={handleChildChange('grade')}
                        />
                        <Typography variant='overline'>Preferences</Typography>
                        <section className={classes.preferences}>
                            <FormControlLabel
                                label='Dyslexia'
                                labelPlacement='bottom'
                                control={
                                    <Switch
                                        checked={dyslexia}
                                        onChange={handlePreferenceChange('dyslexia')}
                                    />
                                }
                            />
                        </section>
                    </CardContent>
                </Card>

                <Fab className={classes.fab} type='submit' color='primary'>
                    <Icon>check</Icon>
                </Fab>
            </form>
        </>
    );
};

export { ChildEdit };
