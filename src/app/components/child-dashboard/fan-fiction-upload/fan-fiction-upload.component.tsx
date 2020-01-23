import React from 'react';

import { Button } from '@material-ui/core';

const FanFictionUpload: React.FC = (props) => {
    // React.useEffect(() => {
    //if (!week) {
    //   axios
    //      .post(``)
    //     .then((res) => {
    //       if (res && res.data) {
    //           setWeek(res.data.week || 1);
    //       }
    //   })
    //   .catch((err) => {
    //        console.error(err);
    //   });
    //  }
    // }, [axios, week]);

    // if (!week) return <span>Loading...</span>;

    return (
        <Button variant='contained' color='primary' href={``}>
            Write and Draw
        </Button>
    );
};

export { FanFictionUpload };
