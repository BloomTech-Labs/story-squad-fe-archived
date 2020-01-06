import React from 'react';
import { RouteComponentProps, StaticContext } from 'react-router';
import { Redirect, Route, useHistory } from 'react-router-dom';

import { useLocalStorage } from '../../hooks/local-storage.hook';

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
    const history = useHistory();
    const {
        storedValue: jwt,
        updateValue: updateJwt,
        removeValue: removeJwt,
    } = useLocalStorage('jwt', null, { objects: false });

    // List for JWT Changes
    window.addEventListener('storage', updateJwt);
    window.addEventListener('logout', removeJwt);

    // Redirect if JWT is not set
    React.useEffect(() => {
        if (!jwt) history.push(redirect);
    }, [history, jwt, redirect]);

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
