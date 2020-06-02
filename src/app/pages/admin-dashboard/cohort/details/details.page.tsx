import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { CohortDetails } from '../../../../components/';

const CohortDetailsPage: React.FC = () => {
    const history = useHistory();
    const { id } = useParams();

    return <CohortDetails id={id} />;
};

export { CohortDetailsPage };
