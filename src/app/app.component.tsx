import './app.component.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './components/common/private-route.component';

import { ExamplePage } from './pages/example.page';
import { Private } from './pages/private.page';
import { ChildCard } from './components/dashboard/child-card.component';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute redirect='/' path='/private' component={Private} />
                <Route path='/' component={ExamplePage} />
                <Route path='/child' component={ChildCard} />
            </Switch>
        </Router>
    );
};

export { App };
