import React from 'react';

import { Button } from '@material-ui/core';
import requestFactory from '../../../util/requestFactory';

const FanFictionUpload: React.FC = (props) => {
    const [week, setWeek] = React.useState<number>();

    const axios = requestFactory();

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
            Upload Fan Fiction
        </Button>
    );
};

export { FanFictionUpload };
