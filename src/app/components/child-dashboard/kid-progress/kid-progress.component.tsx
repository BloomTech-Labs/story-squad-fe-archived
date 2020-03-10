import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import {
    Card,
    CardHeader,
    Button,
    Typography,
    LinearProgress,
    Checkbox,
    Divider,
    useMediaQuery,
} from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';

import { Child } from '../../../models';
import { useAPI } from '../../../hooks';
import 'typeface-bangers';
import picIcon from './icons/pic.png';
import readIcon from './icons/read.png';
import writeIcon from './icons/write.png';

const useStyles = makeStyles((theme) => ({
    card: {
        alignSelf: 'center',
        maxWidth: theme.breakpoints.values.md,
        width: '100%',
    },
    header: {
        display: 'flex',
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        justifyContent: 'space-evenly',
    },
    titleBar: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    title: {
        marginRight: theme.spacing(2),
    },
    progress: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 800,
        flexGrow: 1,
        height: theme.spacing(1),
        borderRadius: 30,
    },
    grid: {
        display: 'flex',
        border: '7px solid black',
    },
    gridItem: {
        margin: theme.spacing(1.5),
    },
    divider: {
        gridColumnStart: '1',
        gridColumnEnd: '5',
        width: '100%',
    },
    orangeButton: {
        'marginTop': '20px',
        'backgroundColor': '#FF6B35',
        'fontSize': '24px',
        'fontWeight': 'bold',
        'borderRadius': '50px',
        'color': 'white',
        'width': '200px',
        'height': '50px',
        'boxShadow': '0px 8px 0px #97300A',
        'textTransform': 'capitalize',
        'fontFamily': 'nunito',
        '&:hover': {
            backgroundColor: '#FF6B35',
        },
    },
    read: {
        backgroundColor: '#B5D33D',
        width: '40%',
        border: '7px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '25px',
    },
    write: {
        backgroundColor: '#EB7D5B',
        width: '100%',
        border: '7px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '25px',
    },
    draw: {
        backgroundColor: '#FED23F',
        width: '100%',
        border: '7px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '25px',
    },
    linkFont: {
        fontFamily: 'bangers',
        fontSize: '96px',
    },
    writeDrawDiv: {
        width: '60%',
    },
    drawIconDiv: {
        width: '100px',
        height: '88px',
        backgroundImage: `url(${picIcon})`,
    },
    readIconDiv: {
        width: '100px',
        height: '78px',
        backgroundImage: `url(${readIcon})`,
    },
    writeIconDiv: {
        width: '100px',
        height: '110px',
        backgroundImage: `url(${writeIcon})`,
    },
    alignRight: {
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
    },
}));

interface KidProgressProps {
    onUpdate?: () => void;
    child: Child;
}

const KidProgressCard: React.FC<KidProgressProps> = ({ child, onUpdate }) => {
    const classes = useStyles({});
    const [response, loading, request] = useAPI('/children/progress', 'POST');

    React.useEffect(() => {
        if (response?.progress && onUpdate) onUpdate();
        if (response?.progress) response.progress = undefined;
    }, [onUpdate, response]);

    const { cohort, progress, username } = child;
    const { dueDates: dueDateStrings } = cohort;
    const dueDates = Object.fromEntries(
        Object.entries(dueDateStrings).map(([key, date]) => [key, moment(date)])
    );
    const today = moment(new Date());

    return (
        <Card className={classes.card}>
            <section className={classes.grid}>
                <div className={classes.read}>
                    <Checkbox checked={progress.reading} className={classes.alignRight} />
                    <div className={classes.readIconDiv}></div>
                    <Link to={`/story/${cohort.week}`} onClick={() => request({ reading: true })}>
                        <Typography className={classes.linkFont}>Read</Typography>
                    </Link>
                </div>
                <div className={classes.writeDrawDiv}>
                    <div className={classes.write}>
                        <Checkbox checked={progress.writing} className={classes.alignRight} />
                        <div className={classes.writeIconDiv}></div>
                        <Link to={`/kids-dashboard/upload`}>
                            <Typography className={classes.linkFont}>Write</Typography>
                        </Link>
                    </div>
                    <div className={classes.draw}>
                        <Checkbox checked={progress.writing} className={classes.alignRight} />
                        <div className={classes.drawIconDiv}></div>
                        <Link to={`/kids-dashboard/points-dashboard`}>
                            <Typography className={classes.linkFont}>Draw</Typography>
                        </Link>
                    </div>
                </div>
            </section>
        </Card>
    );
};
export { KidProgressCard };
