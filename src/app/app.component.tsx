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
    HelpPage,
    ChildHomePage,
    VersusPage,
    VotingPage,
    waitingPage,
} from './pages';

const App: React.FC = () => {
    return (
        <main>
            <AppProvider>
                <CssBaseline />
                <Router>
                    <Switch>
                        <Route path='/dashboard/help' component={HelpPage} />
                        <PrivateRoute
                            redirect='/'
                            path='/dashboard'
                            only='parent'
                            component={DashboardPage}
                        />
                        <PrivateRoute
                            redirect='/'
                            path='/child-home'
                            only='child'
                            component={ChildHomePage}
                        />
                        <PrivateRoute
                            redirect='/'
                            path='/kids-dashboard'
                            only='child'
                            component={ChildDashboard}
                        />
                        <PrivateRoute
                            redirect='/child-home'
                            path='/matchup'
                            only='child'
                            component={VersusPage}
                        />
                        <PrivateRoute
                            redirect='/child-home'
                            path='/voting'
                            only='child'
                            component={VotingPage}
                        />
                        <PrivateRoute
                            redirect='/child-home'
                            path='/waiting-page'
                            only='child'
                            component={waitingPage}
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
                        <Route exact path={['/', '/signup']} component={SignUpPage} />
                        <Route path='/' component={ErrorPage} />
                    </Switch>
                </Router>
            </AppProvider>
        </main>
    );
};

export { App };
