import React from 'react';
import 'typeface-nunito';
import { useStyles } from './child-home-styles';
import { Container, Grid } from '@material-ui/core';
import { Child } from '../../models';
import { Link } from 'react-router-dom';
import AcceptMissionButton from './img/Accept-mission-button.png';
import AvatarButton from './img/Avatar-button.png';
import PassportButton from './img/Passport-button.png';
import TrophyRoomButton from './img/Trophy-room-button.png';
import { KidHeader } from '../reusable-components';

interface ChildHomeProps {
    child: Child;
}

const ChildHome: React.FC<ChildHomeProps> = ({ child }) => {
    const classes = useStyles({});
    return (
        <Container className={classes.containerStyling}>
            {/* Header code */}
            <KidHeader title={'Story Squad'} />
            <Grid className={classes.topRow}>
                <Grid className={classes.mission}>
                    <Link to={'/kids-dashboard'}>
                        <img
                            className={classes.pictureHover}
                            src={AcceptMissionButton}
                            alt='Accept your weekly mission!'
                        />
                    </Link>
                </Grid>
                <Grid className={classes.avatarCreator}>
                    <img src={AvatarButton} alt='Create your Story Squad Avatar!' />
                </Grid>
            </Grid>
            <Grid className={classes.bottomRow}>
                <Grid className={classes.passport}>
                    <img src={PassportButton} alt='???' />
                </Grid>
                <Grid className={classes.trophyRoom}>
                    <img src={TrophyRoomButton} alt='See who has the most victories and points!' />
                </Grid>
            </Grid>
        </Container>
    );
};

export { ChildHome };
