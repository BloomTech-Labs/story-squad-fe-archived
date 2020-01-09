import React from 'react';

const CurrentChapterLink: React.FC = (props) => {
    const [week, setWeek] = React.useState(1);

    React.useEffect(() => {
        // look up week # for child
    }, []);

    return <a href={`/story/${week}`}>Current Story</a>;
};

export { CurrentChapterLink };
