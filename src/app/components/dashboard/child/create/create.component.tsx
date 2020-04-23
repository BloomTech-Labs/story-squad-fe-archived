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
import { Child } from '../../../../models';
import { childListRefresh, displayError } from '../../../../state';
import { useAPI, useForm } from '../../../../hooks';
import { useStyles } from './create-component-styles';

interface ChildCreateProps {
    onCreate: (child: Child) => void;
}

const ChildCreate: React.FC<ChildCreateProps> = ({ onCreate }) => {
    const classes = useStyles({});

    const [response, loading, request] = useAPI('/children/list', 'POST');
    const { state, handleInputChange, handleSubmitBuilder } = useForm({ username: '', grade: 3 });
    const handleChange = handleSubmitBuilder(request);

    React.useEffect(() => {
        if (response) childListRefresh();
        if (response && onCreate) onCreate(response.child);
    }, [onCreate, response]);

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
