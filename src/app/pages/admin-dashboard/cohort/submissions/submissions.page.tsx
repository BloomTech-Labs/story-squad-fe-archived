import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { Submissions } from '../../../../components';

const SubmissionsPage: React.FC = () => {
    const { url } = useRouteMatch();
    const { params } = useParams();

    return <Submissions url={url} params={params} />;
};

export { SubmissionsPage };
