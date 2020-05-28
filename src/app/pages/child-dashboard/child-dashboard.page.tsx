import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { CircularProgress } from '@material-ui/core';
import { useStyles } from './child-dashboard-styles';
import { ChildContext } from '../../state/Context';
import { useAPI } from '../../hooks';
import {
    KidProgressCard,
    PointDashboard,
    DrawingForm,
    StoryForm,
    TeamJoin,
    Versus,
} from '../../components';
import { Switch, Route } from 'react-router-dom';
import 'typeface-bangers';

const { Provider } = ChildContext;
const ChildDashboard: React.FC = () => {
    const classes = useStyles();
    const [response, loading, request] = useAPI('/children/me');
    if (!response?.me)
        return (
            <section className={classes.loading}>
                <CircularProgress size={56} />
            </section>
        );
    const handleRequest = () => {
        request();
        // request();
    };
    return (
        <div className={classes.root}>
            <main className={classes.main}>
                <Provider value={response.me}>
                    <Switch>
                        <Route
                            path='/kids-dashboard/upload'
                            render={() => (
                                <StoryForm
                                    week={response.me.cohort.week}
                                    onUpdate={() => handleRequest}
                                />
                            )}
                        />
                        <Route
                            path='/kids-dashboard/drawing-upload'
                            render={() => (
                                <DrawingForm
                                    week={response.me.cohort.week}
                                    onUpdate={() => handleRequest}
                                />
                            )}
                        />
                        <Route
                            path='/kids-dashboard/points-dashboard'
                            render={() => <PointDashboard child={response.me} />}
                        />
                        <Route
                            path='/kids-dashboard/team-join'
                            render={() => <TeamJoin child={response.me} />}
                        />
                        <Route
                            path='/'
                            render={() => (
                                <div className={classes.content}>
                                    <KidProgressCard child={response.me} onUpdate={handleRequest} />
                                </div>
                            )}
                        />
                    </Switch>
                </Provider>
            </main>
        </div>
    );
};

export { ChildDashboard };
