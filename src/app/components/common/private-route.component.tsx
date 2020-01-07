import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Redirect, Route } from 'react-router-dom';

import { useLocalStorage } from '../../hooks/local-storage/local-storage.hook';

type PrivateRouteProps<P = {}> = {
    redirect: string;
    component?: React.FC<RouteComponentProps<P>>;
    render?: (props: RouteComponentProps) => React.ReactNode;
    [key: string]: any;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({
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
