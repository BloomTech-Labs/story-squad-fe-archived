import './app.component.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './components/common/private-route/private-route.component';

import {
    ExamplePage,
    SignUpPage,
    PrivacyPage,
    ToSPage,
    DashboardPage,
    AddCardPage,
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
                <Route path='/cards/add' component={AddCardPage} />
                <Route path='/' component={ExamplePage} />
            </Switch>
        </Router>
    );
};

export { App };
