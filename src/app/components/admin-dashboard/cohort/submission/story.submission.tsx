import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAPI } from '../../../../hooks';
import axios from 'axios';

import { Button } from '@material-ui/core';

// http://localhost:3000/admin/dashboard/cohort/:child_id/details/story

const StorySubmissions: React.FC = () => {
    const { id } = useParams();
    const [response, loading, request] = useAPI(`/storyroutes/children/${id}/`);
    const [story, setStory] = useState();

    console.log('Story response', response);

    useEffect(() => {
        if (response !== undefined) {
            setStory(response.stories[0].transcribed_text.t_page1);
        }
    }, [response]);

    const handleFlag: any = () => {
        //const [response, loading, request] = useAPI(`/storyRoutes/children/${id}/`, 'PUT');
        axios
            .put(`/storyRoutes/stories/${response.stories[0].id}`, {
                isFlagged: !response.stories[0].is_flagged,
            })
            .then((res) => {
                console.log('Put response', res);
            })
            .catch((err) => {
                console.log('Got some errors', err);
            });

        // PUT storyRoutes/stories/:id -- id of the story, body needs to have JSON { "is_flagged": true } or { "is_flagged": false }. edits "is_flagged"
    };

    return (
        <>
            <div>
                <p>{story && story}</p>
            </div>
            <div>
                <Button onClick={handleFlag}>
                    {response && response.stories[0].is_flagged ? 'Unflag' : 'Flag'}
                </Button>
            </div>
        </>
    );
};

export { StorySubmissions };
