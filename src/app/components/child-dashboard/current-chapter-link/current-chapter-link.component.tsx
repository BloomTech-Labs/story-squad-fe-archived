import React from 'react';

import { Button } from '@material-ui/core';
import requestFactory from '../../../util/requestFactory';

const CurrentChapterLink: React.FC = (props) => {
    const [week, setWeek] = React.useState<number>();

    const axios = requestFactory();

    React.useEffect(() => {
        // look up week # for child
        if (!week) {
            axios
                .get(`/children/me`)
                .then((res) => {
                    if (res && res.data) {
                        setWeek(res.data.week || 1); // default to week 1 if not set
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, [axios, week]);

    if (!week) return <span>Loading...</span>;

    return (
        <Button variant='contained' color='primary' href={`/story/${week}`}>
            Current Story
        </Button>
    );
};

export { CurrentChapterLink };
