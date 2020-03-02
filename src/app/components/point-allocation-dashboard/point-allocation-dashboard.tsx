import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { Points } from '../../models';

const useStyles = makeStyles({
    pointBg: {
        backgroundColor: '#0072bb',
        height: '500px',
    },
});

const PointDashboard: React.FC = () => {
    const [points, setPoints] = useState({
        story1Points: 10,
        story2Points: 10,
        pic1Points: 10,
        pic2Points: 10,
    });

    const [remainingPoints, setRemainingPoints] = useState(60);

    useEffect(() => {
        setRemainingPoints(
            100 -
                (points.story1Points + points.story2Points + points.pic1Points + points.pic2Points)
        );
    }, [points]);

    const classes = useStyles({});

    return (
        <div className={classes.pointBg}>
            <div>Point</div>
            <div>
                <span>WhiteFox</span>
                <span>CatLady</span>
            </div>
            <div>Point Remaining: {remainingPoints}</div>
            <div>
                <span>
                    Story 1 <TextField type='number' />
                </span>
                <span>
                    Story 2 <TextField type='number' />
                </span>
            </div>
            <div>
                <span>
                    Pic 1 <TextField type='number' />
                </span>
                <span>
                    Pic 2 <TextField type='number' />
                </span>
            </div>
        </div>
    );
};

export { PointDashboard };
