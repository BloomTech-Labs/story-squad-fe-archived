import React from 'react';
import { RouteComponentProps, StaticContext } from 'react-router';
import { Redirect, Route, useHistory } from 'react-router-dom';

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
    const jwt = localStorage.getItem('jwt');
    const history = useHistory();

    React.useEffect(() => {
        if (!jwt) history.push(redirect);
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
