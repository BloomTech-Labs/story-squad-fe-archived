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
} from './pages';
<<<<<<< HEAD
import { ChildHome } from './components/child-dashboard/child-home/child-home.component';
=======
>>>>>>> 66891c9707555e7b957372881ad0851b3413bcd3

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
                        {/* <Route exact path={'/'} component={ChildHome} /> */}
                        <Route path='/' component={ErrorPage} />
                    </Switch>
                </Router>
                <ErrorHandler />
            </AppProvider>
        </main>
    );
};

export { App };
