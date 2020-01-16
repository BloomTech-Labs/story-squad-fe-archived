import './app.component.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';

import { PrivateRoute } from './components';
import {
    SignUpPage,
    PrivacyPage,
    ToSPage,
    DashboardPage,
    ChildDashboard,
    PdfDisplayPage,
    AdminDashboardPage,
    AdminSignInPage,
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
                    <PrivateRoute
                        redirect='/admin'
                        path='/admin/dashboard'
                        component={AdminDashboardPage}
                    />
                    <Route path='/privacy-policy' component={PrivacyPage} />
                    <Route path='/terms-of-service' component={ToSPage} />
                    <Route path='/admin' component={AdminSignInPage} />
                    <Route path='/' component={SignUpPage} />
                </Switch>
            </Router>
        </main>
    );
};

export { App };
