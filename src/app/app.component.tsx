import './app.component.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';

import { PrivateRoute } from './components';
import {
    ExamplePage,
    SignUpPage,
    PrivacyPage,
    ToSPage,
    DashboardPage,
    ChildDashboard,
    PdfDisplayPage,
} from './pages';

const App: React.FC = () => {
    return (
        <main>
            <CssBaseline />
            <Router>
                <Switch>
                    <PrivateRoute
                        redirect='/signup'
                        path='/dashboard'
                        only='parent'
                        component={DashboardPage}
                    />
                    <PrivateRoute
                        redirect='/signup'
                        path='/kids-dashboard'
                        only='child'
                        component={ChildDashboard}
                    />
                    <PrivateRoute
                        redirect='/signup'
                        path='/story/:week'
                        only='child'
                        component={PdfDisplayPage}
                    />
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
