import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useAPI } from '../../hooks';
import { Versus } from '../../components';
import { Switch, Route } from 'react-router-dom';
import 'typeface-bangers';
import { useStyles } from './versus-page-styles';

const VersusPage: React.FC = () => {
    const classes = useStyles({});
    const [response, loading, request] = useAPI('/children/me');
    const handleRequest = () => {
        request();
    };
    if (!response?.me)
        return (
            <section className={classes.loading}>
                <CircularProgress size={56} />
            </section>
        );
    return (
        <div className={classes.root}>
            <main className={classes.main}>
                <Switch>
                    <Route
                        path='/matchup'
                        component={Versus}
                        child={response.me}
                        onUpdate={handleRequest}
                    />
                </Switch>
            </main>
        </div>
    );
};
export { VersusPage };
