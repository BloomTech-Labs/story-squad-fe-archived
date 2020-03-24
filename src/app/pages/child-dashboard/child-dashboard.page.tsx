import React from 'react';

import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useAPI } from '../../hooks';
import {
    KidProgressCard,
    PointDashboard,
    DrawingForm,
    StoryForm,
    TeamJoin,
} from '../../components';
import { Switch, Route } from 'react-router-dom';
import 'typeface-bangers';

const useStyles = makeStyles((theme) => ({
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },
    headerFont: {
        'fontFamily': 'Bangers',
        'fontSize': '86px',
        'fontWeight': 'bold',
        '-webkit-text-stroke-width': '1px',
        '-webkit-text-stroke-color': '#ff6d3a',
    },
    headerBorder: {
        border: '4px solid #292929',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    welcome: {
        marginBottom: theme.spacing(2),
    },
    toolbar: theme.mixins.toolbar,
}));

const ChildDashboard: React.FC = () => {
    const classes = useStyles();
    const [response, loading, request] = useAPI('/children/me');

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
                        path='/kids-dashboard/upload'
                        render={() => (
                            <StoryForm week={response.me.cohort.week} onUpdate={request} />
                        )}
                    />
                    <Route
                        path='/kids-dashboard/drawing-upload'
                        render={() => (
                            <DrawingForm week={response.me.cohort.week} onUpdate={request} />
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
                                <KidProgressCard child={response.me} onUpdate={request} />
                            </div>
                        )}
                    />
                </Switch>
            </main>
        </div>
    );
};

export { ChildDashboard };
