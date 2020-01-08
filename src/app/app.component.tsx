import './app.component.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './components/common/private-route.component';

import { ExamplePage } from './pages/example.page';
import { ChildPage } from './pages/child.page';
import { SignUpPage } from './pages/sign-up.page';
import { DashboardPage } from './pages/dashboard.page';
import { PrivacyPage } from './pages/privacy-policy.page';
import { ToSPage } from './pages/tos.page';
import { CreateChildPage } from './pages/create-child.page';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute redirect='/signup' path='/dashboard' component={DashboardPage} />
                <PrivateRoute redirect='/signup' path='/child/create' component={CreateChildPage} />
                <Route path='/signup' component={SignUpPage} />
                <Route path='/privacy-policy' component={PrivacyPage} />
                <Route path='/terms-of-service' component={ToSPage} />
                <Route path='/child' component={ChildPage} />
                <Route path='/' component={ExamplePage} />
            </Switch>
        </Router>
    );
};

export { App };
