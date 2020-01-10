import React from 'react';

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
                    console.log(res.data);
                    if (res && res.data) {
                        // setWeek(res.data.week);
                        setWeek(1);
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, [axios, week]);

    if (!week) return <span>Loading...</span>;

    return <a href={`/story/${week}`}>Current Story</a>;
};

export { CurrentChapterLink };
