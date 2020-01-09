import './app.component.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './components/common/private-route.component';

import { ExamplePage } from './pages/example.page';
import { SignUpPage } from './pages/sign-up.page';
import { DashboardPage } from './pages/dashboard.page';
import { PrivacyPage } from './pages/privacy-policy.page';
import { ToSPage } from './pages/tos.page';
import { CreateChildPage } from './pages/create-child.page';
import { EditProfilePage } from './pages/edit.page';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute redirect='/signup' path='/dashboard' component={DashboardPage} />
                <PrivateRoute redirect='/signup' path='/child/create' component={CreateChildPage} />
                <PrivateRoute redirect='/dashboard' path='/child/edit' component={EditProfilePage} />
                <Route path='/signup' component={SignUpPage} />
                <Route path='/privacy-policy' component={PrivacyPage} />
                <Route path='/terms-of-service' component={ToSPage} />
                <Route path='/' component={ExamplePage} />
            </Switch>
        </Router>
    );
};

export { App };
