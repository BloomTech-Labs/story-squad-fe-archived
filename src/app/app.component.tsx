import './app.component.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './components/common/private-route.component';

import { CheckoutPage, SignUpPage, DashboardPage, PrivacyPage, ToSPage } from './pages';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute redirect='/signup' path='/dashboard' component={DashboardPage} />
                <Route path='/signup' component={SignUpPage} />
                <Route path='/privacy-policy' component={PrivacyPage} />
                <Route path='/terms-of-service' component={ToSPage} />
                <Route path='/' component={CheckoutPage} />
            </Switch>
        </Router>
    );
};

export { App };
