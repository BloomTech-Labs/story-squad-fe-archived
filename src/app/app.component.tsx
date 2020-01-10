import './app.component.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './components/common/private-route/private-route.component';

import {
    ExamplePage,
    SignUpPage,
    DashboardPage,
    PrivacyPage,
    ToSPage,
    CreateChildPage,
    EditProfilePage,
    ChildDashboard,
    PdfDisplayPage,
} from './pages';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute
                    redirect='/signup'
                    path='/dashboard'
                    only='parent'
                    component={DashboardPage}
                />
                <PrivateRoute redirect='/signup' path='/child/create' component={CreateChildPage} />
                <PrivateRoute
                    redirect='/dashboard'
                    path='/child/edit/:id'
                    component={EditProfilePage}
                />
                <PrivateRoute
                    redirect='/signup'
                    path='/kids-dashboard'
                    only='child'
                    component={ChildDashboard}
                />
                <PrivateRoute
                    redirect='/signup'
                    path='/story/:week'
                    only='child'
                    component={PdfDisplayPage}
                />
                <Route path='/signup' component={SignUpPage} />
                <Route path='/privacy-policy' component={PrivacyPage} />
                <Route path='/terms-of-service' component={ToSPage} />
                <Route path='/' component={ExamplePage} />
            </Switch>
        </Router>
    );
};

export { App };
