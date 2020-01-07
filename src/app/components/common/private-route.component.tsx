import React from 'react';
import { RouteComponentProps, StaticContext } from 'react-router';
import { Redirect, Route } from 'react-router-dom';

import { useLocalStorage } from '../../hooks/local-storage/local-storage.hook';

type PrivateRoute = {
    redirect: string;
    component?: React.FC<any>;
    render?: (props: RouteComponentProps<any, StaticContext, any>) => React.ReactNode;
    [key: string]: any;
};

const PrivateRoute: React.FunctionComponent<PrivateRoute> = ({
    redirect,
    component: Component,
    render: Render,
    ...rest
}) => {
    const { value: jwt, removeValue: logout, updateValue: switchAccounts } = useLocalStorage(
        'jwt',
        null
    );

    // Listen for events relating to user changing.
    React.useEffect(() => {
        window.addEventListener('logout', logout);
        window.addEventListener('switch-accounts', switchAccounts);

        return () => {
            window.removeEventListener('logout', logout);
            window.removeEventListener('switch-accounts', switchAccounts);
        };
    });

    return (
        <Route
            {...rest}
            render={(props) => {
                if (!jwt) return <Redirect to={redirect} />;
                if (Component) return <Component {...props} />;
                if (Render) return Render(props);
            }}
        />
    );
};

export { PrivateRoute };
