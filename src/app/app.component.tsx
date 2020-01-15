import './app.component.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';

import { ErrorPage } from './pages/error-page/error-page';
import { PrivateRoute } from './components';
import {
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
                        redirect='/'
                        path='/dashboard'
                        only='parent'
                        component={DashboardPage}
                    />
                    <PrivateRoute
                        redirect='/'
                        path='/kids-dashboard'
                        only='child'
                        component={ChildDashboard}
                    />
                    <PrivateRoute
                        redirect='/'
                        path='/story/:week'
                        only='child'
                        component={PdfDisplayPage}
                    />
                    <Route path='/privacy-policy' component={PrivacyPage} />
                    <Route path='/terms-of-service' component={ToSPage} />
                    <Route path='/' component={SignUpPage} />
                    <Route path='*' component={ErrorPage} />
                </Switch>
            </Router>
        </main>
    );
};

export { App };
