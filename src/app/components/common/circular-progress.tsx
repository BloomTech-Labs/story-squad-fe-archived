import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        'display': 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

function CircularDeterminate() {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        function tick() {
            // reset when reaching 100%
            setProgress((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 1));
        }

        const timer = setInterval(tick, 20);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={classes.root}>
            <CircularProgress variant='determinate' value={progress} />
            <CircularProgress variant='determinate' value={progress} color='secondary' />
        </div>
    );
}

export { CircularDeterminate };
