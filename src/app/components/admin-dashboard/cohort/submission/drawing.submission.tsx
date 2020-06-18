import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAPI } from '../../../../hooks';
import { requestFactory } from '../../../../util';
import { Illustration } from '../../../../models';

import { Button } from '@material-ui/core';

// http://localhost:3000/admin/dashboard/cohort/:child_id/details/drawing

const DrawingSubmissions: React.FC = () => {
    const { id, week } = useParams();
    const [response, loading, request] = useAPI(`illustrationRoutes/children/${id}/week/${week}`);
    const [illustration, setIllustration] = useState<Illustration>();
    const axios = requestFactory();

    useEffect(() => {
        if (response !== undefined) {
            setIllustration(response.illustration);
        }
    }, [response]);

    const handleFlag: any = () => {
        axios
            .put(`/illustrationRoutes/illustrations/${response.illustration.id}`, {
                isFlagged: !illustration.isFlagged,
            })
            .then((res) => {
                setIllustration(res.data.illustration);
            })
            .catch((err) => {
                console.log('Got some errors', err);
            });
    };

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
                {illustration ? (
                    <Button color='primary' variant='contained' onClick={handleFlag}>
                        {illustration && illustration.isFlagged ? 'Unflag' : 'Flag'}
                    </Button>
                ) : (
                    <p>No illustration found for this week</p>
                )}
            </div>
        </>
    );
};

export { DrawingSubmissions };
