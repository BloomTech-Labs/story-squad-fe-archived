import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAPI } from '../../../../hooks';
import { requestFactory } from '../../../../util';

// import { useStyles } from './submission.styles';
import { Button } from '@material-ui/core';

// http://localhost:3000/admin/dashboard/cohort/:child_id/details/story

interface Story {
    automated_readability_index: number;
    childId: number;
    coleman_liau_index: number;
    consolidated_score: string;
    dale_chall_readability_score: number;
    difficult_words: number;
    doc_length: number;
    flesch_kincaid_grade: number;
    flesch_reading_ease: number;
    gunning_fog: number;
    id: number;
    isFlagged: boolean;
    linsear_write_formula: number;
    points: number;
    possibleWords: string;
    quote_count: number;
    smog_index: number;
    story: {
        page1: string;
        page2: string;
        page3: string;
        page4: string;
        page5: string;
    };
    transcribed_text: {
        t_page1: string;
        t_page2: string;
        t_page3: string;
        t_page4: string;
        t_page5: string;
    };
    votes: number;
    week: number;
}

const StorySubmissions: React.FC = () => {
    const { id } = useParams();
    const [response, loading, request] = useAPI(`/storyroutes/children/${id}/`);
    const [story, setStory] = useState<Story>();
    const axios = requestFactory();
    // const classes = useStyles({});

    useEffect(() => {
        if (response !== undefined) {
            setStory(response.stories[0]);
        }
        console.log(response);
    }, [response]);

    const handleFlag: any = () => {
        axios
            .put(`/storyRoutes/stories/${response.stories[0].id}`, {
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
        <>
            <div>
                {story && !story.isFlagged ? (
                    <></>
                ) : (
                    <h1>{story && story.possibleWords.split('"')}</h1>
                )}
                <p>{story && story.transcribed_text.t_page1}</p>
                <img style={{ maxWidth: '600px' }} src={story && story.story.page1} alt='' />
            </div>
            <div>
                <Button color='primary' variant='contained' onClick={handleFlag}>
                    {story && story.isFlagged ? 'Unflag' : 'Flag'}
                </Button>
            </div>
        </>
    );
};

export { StorySubmissions };
