import React from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';

import { childListRefresh } from '../../../../state';
import { ChildEdit } from '../../../../components';

const EditProfilePage: React.FC = () => {
    const history = useHistory();
    const { id } = useParams();

    const handleUpdate = () => {
        childListRefresh();
        history.push('/dashboard');
    };

    if (!id) return <Redirect to='/dashboard' />;
    return <ChildEdit id={id} onUpdate={handleUpdate} />;
};

export { EditProfilePage };
