import React from 'react';
import { useHistory } from 'react-router-dom';

import { Icon, ListItem, ListItemText } from '@material-ui/core';

import { Child } from '../../../../models';
import { useAPI } from '../../../../hooks';

interface ChildLinkProps {
    className?: string;
    iconClass?: string;
    child: Child;
}

const ChildLink: React.FC<ChildLinkProps> = ({ className, iconClass, child }) => {
    const history = useHistory();
    const { request: signIn, response: signInResponse } = useAPI(
        `/children/${child.id}/login`,
        'POST'
    );

    React.useEffect(() => {
        if (!signInResponse?.token) return;
        localStorage.setItem('jwt', signInResponse.token);
        window.dispatchEvent(new Event('switch-accounts'));
        history.push('/kids-dashboard');
    }, [history, signInResponse]);

    return (
        <ListItem button onClick={() => signIn()} className={className}>
            <Icon className={iconClass}>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/dashboard.svg`}
                    width='100%'
                    height='100%'
                />
            </Icon>
            <ListItemText primary={`${child.username} Account`} />
        </ListItem>
    );
};

export { ChildLink };
