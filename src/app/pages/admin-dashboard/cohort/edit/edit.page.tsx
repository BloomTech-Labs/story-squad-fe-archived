import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { EditCohort } from '../../../../components';

const EditCohortPage: React.FC = () => {
    const history = useHistory();
    const { id } = useParams();

    const handleUpdate = () => history.push('/admin/dashboard/cohort');
    return <EditCohort onUpdate={handleUpdate} id={id} />;
};

export { EditCohortPage };
