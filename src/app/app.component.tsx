import './app.component.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ExamplePage } from './pages/example.page';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' component={ExamplePage} />
            </Switch>
        </Router>
    );
};

export { App };
