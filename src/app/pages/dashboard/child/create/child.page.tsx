import React from 'react';
import { useHistory } from 'react-router-dom';

import { childListRefresh } from '../../../../state';
import { ChildCreate } from '../../../../components';

const CreateChildPage: React.FC = () => {
    const history = useHistory();

    const handleCreate = async ({ id }) => {
        await childListRefresh();
        history.push(`/dashboard/subscribe/${id}`);
    };

    return <ChildCreate onCreate={handleCreate} />;
};

export { CreateChildPage };
