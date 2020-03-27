import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import splode from '../img/splode.png';

interface StudentProps {
    username: string;
    avatar: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        avatarStyling: {
            backgroundImage: `url(${splode})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '70%',
        },
        avatarImg: {
            transform: 'scale(0.7)',
        },
        childUsername: {
            'fontFamily': 'Bangers',
            'color': '#FFFFFF',
            'fontSize': '48px',
            'fontWeight': 'bold',
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': '#000000',
        },
    })
);

export const Avatar: React.FC<StudentProps> = ({ username, avatar }) => {
    const classes = useStyles({});
    return (
        <>
            <Grid container justify='center' alignItems='center'>
                <div className={classes.avatarStyling}>
                    <img src={avatar} className={classes.avatarImg} alt='child avatar' />
                    <Typography align='center' variant='h3' className={classes.childUsername}>
                        {username}
                    </Typography>
                </div>
            </Grid>
        </>
    );
};
