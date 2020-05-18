import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { WaitingPage } from '../../components';

const waitingPage: React.FC = () => {
    return (
        <Switch>
            <Route path='/waiting-page' component={WaitingPage} />
        </Switch>
    );
};
export { waitingPage };
