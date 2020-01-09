import './app.component.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './components/common/private-route/private-route.component';

import {
    ExamplePage,
    CheckoutPage,
    SignUpPage,
    DashboardPage,
    PrivacyPage,
    ToSPage,
    CreateChildPage,
    EditProfilePage,
} from './pages';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute redirect='/signup' path='/dashboard' component={DashboardPage} />
                <PrivateRoute redirect='/signup' path='/child/create' component={CreateChildPage} />
                <PrivateRoute
                    redirect='/dashboard'
                    path='/child/edit/:id'
                    component={EditProfilePage}
                />
                <Route path='/signup' component={SignUpPage} />
                <Route path='/privacy-policy' component={PrivacyPage} />
                <Route path='/terms-of-service' component={ToSPage} />
                <Route path='/' component={CheckoutPage} />
            </Switch>
        </Router>
    );
};

export { App };
