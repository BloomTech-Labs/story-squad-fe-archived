import React from 'react';
import { useHistory } from 'react-router-dom';

import { ListItem, ListItemText } from '@material-ui/core';

import { Child } from '../../../../models';
import { useAPI } from '../../../../hooks';

interface ChildLinkProps {
    child: Child;
}

const ChildLink: React.FC<ChildLinkProps> = ({ child }) => {
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
        <ListItem button onClick={signIn}>
            <ListItemText primary={`${child.username} Account`} />
        </ListItem>
    );
};

export { ChildLink };
