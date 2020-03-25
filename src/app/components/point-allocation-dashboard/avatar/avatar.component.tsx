import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import splode from '../img/splode.png';
import ava1 from '../img/cam.png';

interface StudentProps {
    username: string;
    avatar: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        avatarMargin: {
            fontFamily: 'nunito',
            fontSize: '18px',
            fontWeight: 'bold',
            backgroundColor: '#B5D33D',
            padding: '26px 6px 11px 6px',
            borderLeft: '14px solid #000000',
            borderTop: '7px solid #000000',
        },
        avatarStyling: {
            marginTop: '25px',
            width: '215px',
            height: '180px',
            backgroundImage: `url(${splode})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '101% 103%',
        },
        username: {
            'position': 'absolute',
            'top': '395px',
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
            <Grid
                container
                item
                justify='center'
                direction='column'
                alignItems='center'
                sm={4}
                className={classes.avatarMargin}>
                {/* Avatar 1 */}
                <img src={avatar} className={classes.avatarStyling} alt='child avatar' />
                {/* Username 1 */}
                <>
                    <br />
                    <p className={classes.username}>{username}</p>
                </>
            </Grid>
        </>
    );
};
