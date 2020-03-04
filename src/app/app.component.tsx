import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';

import { AppProvider } from './state';
import { PrivateRoute, ErrorHandler } from './components';
import {
    SignUpPage,
    PrivacyPage,
    ToSPage,
    DashboardPage,
    ChildDashboard,
    PdfDisplayPage,
    AdminDashboardPage,
    AdminSignInPage,
    AdminSignUpPage,
    ErrorPage,
} from './pages';
import { PointDashboard } from './components/point-allocation-dashboard';

const App: React.FC = () => {
    return (
        <main>
            <AppProvider>
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
                        <Route path='/admin/register' component={AdminSignUpPage} />
                        <Route path='/admin' component={AdminSignInPage} />
                        <Route exact path={['/', '/signup']} component={SignUpPage} />
                        <Route path='/team-points' component={PointDashboard} />
                        <Route path='/' component={ErrorPage} />
                    </Switch>
                </Router>
                <ErrorHandler />
            </AppProvider>
        </main>
    );
};

export { App };
