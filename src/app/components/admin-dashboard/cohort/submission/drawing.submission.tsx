import React from 'react';
import { useParams } from 'react-router-dom';
import { useAPI } from '../../../../hooks';

// http://localhost:3000/admin/dashboard/cohort/:child_id/details/drawing

const DrawingSubmissions: React.FC = () => {
    const { id } = useParams();
    return <div>Hello it's me drawings</div>;
};

export { DrawingSubmissions };
