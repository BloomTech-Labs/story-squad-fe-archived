import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useAPI } from '../../hooks';
import { ChildHome } from '../../components';
import { Switch, Route } from 'react-router-dom';
import 'typeface-bangers';
import { useStyles } from './child-home-styles';
const ChildHomePage: React.FC = () => {
    const classes = useStyles({});
    const [response, loading, request] = useAPI('/children/me');
    console.log(response);
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
                    <Route path='/child-home' component={ChildHome} />
                </Switch>
            </main>
        </div>
    );
};
export { ChildHomePage };
