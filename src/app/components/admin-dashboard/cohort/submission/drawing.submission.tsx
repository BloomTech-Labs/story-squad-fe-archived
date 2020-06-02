import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAPI } from '../../../../hooks';
import { Illustration } from '../../../../models';

import { Button } from '@material-ui/core';

// http://localhost:3000/admin/dashboard/cohort/:child_id/details/drawing

const DrawingSubmissions: React.FC = () => {
    const { id } = useParams();
    const [response, loading, request] = useAPI(`illustrationRoutes/children/${id}/`);
    const [illustration, setIllustration] = useState<Illustration>();
    console.log('Drawing response', response);

    useEffect(() => {
        if (response !== undefined) {
            setIllustration(response.illustrations[0]);
        }
    }, [response]);

    return (
        <>
            <div>
                <img
                    style={{ maxWidth: '600px' }}
                    src={illustration && illustration.illustration}
                    alt=''
                />
            </div>
            <div>
                <Button color='primary' variant='contained'>
                    Dud button
                </Button>
            </div>
        </>
    );
};

export { DrawingSubmissions };
