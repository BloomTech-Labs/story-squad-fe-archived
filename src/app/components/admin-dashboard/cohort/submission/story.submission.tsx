import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAPI } from '../../../../hooks';
import { requestFactory } from '../../../../util';
import { useStyles } from './story.submission.styles';
import { Story } from '../../../../models';

// import { useStyles } from './submission.styles';
import { Button } from '@material-ui/core';

// http://localhost:3000/admin/dashboard/cohort/:child_id/details/story

const StorySubmissions: React.FC = () => {
    const { id, week } = useParams();
    const [response, loading, request] = useAPI(`/storyRoutes/children/${id}/week/2`);
    const [story, setStory] = useState<Story>();
    const axios = requestFactory();
    const classes = useStyles({});

    useEffect(() => {
        if (response !== undefined) {
            setStory(response.story);
        }
        console.log('Story Submission Response', response);
    }, [response]);

    const handleFlag: any = () => {
        axios
            .put(`/storyRoutes/stories/${response.story.id}`, {
                isFlagged: !story.isFlagged,
            })
            .then((res) => {
                console.log('Put response', res.data);
                setStory(res.data.story);
            })
            .catch((err) => {
                console.log('Got some errors', err);
            });
    };

    // function colorize() {
    //     const theStory = story.transcribed_text.t_page1;
    //     const badWords = story.possibleWords.split('"') // ["{", "butt", "heck", "}"]

    //     return (<span>the word here</span>)
    // }

    return (
        <div className={classes.wrapper}>
            <div className={classes.flagged}>
                {story && !story.isFlagged ? (
                    <></>
                ) : (
                    <h1>{story && story.possibleWords.split('"')}</h1>
                )}
                {story ? (
                    <Button color='primary' variant='contained' onClick={handleFlag}>
                        {story && story.isFlagged ? 'Unflag' : 'Flag'}
                    </Button>
                ) : (
                    <p>No story found for this week</p>
                )}
            </div>
            <div className={classes.text}>
                <p>{story && story.transcribed_text.t_page1}</p>
                <img style={{ maxWidth: '600px' }} src={story && story.story.page1} alt='' />
            </div>
        </div>
    );
};

export { StorySubmissions };
