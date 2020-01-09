import './app.component.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';

import { PrivateRoute } from './components';
import { ExamplePage, SignUpPage, PrivacyPage, ToSPage, DashboardPage } from './pages';

const App: React.FC = () => {
    return (
        <main>
            <CssBaseline />
            <Router>
                <Switch>
                    <PrivateRoute redirect='/signup' path='/dashboard' component={DashboardPage} />
                    <Route path='/signup' component={SignUpPage} />
                    <Route path='/privacy-policy' component={PrivacyPage} />
                    <Route path='/terms-of-service' component={ToSPage} />
                    <Route path='/' component={ExamplePage} />
                </Switch>
            </Router>
        </main>
    );
};

export { App };
