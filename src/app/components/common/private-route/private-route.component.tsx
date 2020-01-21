import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Redirect, Route } from 'react-router-dom';
import { decode } from 'jsonwebtoken';

import { useLocalStorage } from '../../../hooks';

type PrivateRouteProps<P = {}> = {
    redirect: string;
    component?: React.FC<RouteComponentProps<P>>;
    render?: (props: RouteComponentProps) => React.ReactNode;
    only?: 'child' | 'parent';
    [key: string]: any;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({
    redirect,
    component: Component,
    render: Render,
    only,
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
                if (only) {
                    const decoded = decode(jwt);
                    if (only === 'child' && decoded && !decoded.childID && !decoded.subscription) {
                        return <Redirect to={redirect} />;
                    }
                    if (only === 'parent' && decoded && decoded.childID) {
                        return <Redirect to={redirect} />;
                    }
                }
                if (Component) return <Component {...props} />;
                if (Render) return Render(props);
            }}
        />
    );
};

export { PrivateRoute };
