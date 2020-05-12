import React from 'react';
import 'typeface-nunito';
import { useStyles } from './child-home-styles';
import { Container, Grid } from '@material-ui/core';
import { Child } from '../../models';
import { Link } from 'react-router-dom';
import AcceptMissionButton from './img/Accept-mission-button.png';
import AcceptBubble from './img/Rectangle 86.svg';
import AcceptText from './img/acceptText.svg';
import AcceptSVG from './img/Group 164.svg';
import AvatarButton from './img/Avatar-button.png';
import PassportButton from './img/Passport-button.png';
import TrophyRoomButton from './img/Trophy-room-button.png';
import { KidHeader } from '../reusable-components';
import './styles.css';
interface 
const ChildHome: React.FC<ChildHomeProps> = () => {
    const classes = useStyles({});
    return (
        <Container className={classes.containerStyling}>
            {/* Header code */}
            <KidHeader title={'Story Squad'} />
            {/* <Grid className={classes.topRow}> */}
            {/* <Grid className={classes.mission}> */}
            <main className='mission-main'>
                <div className='img-div col-big'>
                    <Link to={'/kids-dashboard'}>
                    <img
                        className={classes.pictureHover}
                        src={AcceptBubble}
                        alt='Accept your weekly mission!'
                    />
                    <img
                        className={classes.pictureHover}
                        src={AcceptText}
                        alt='Accept your weekly mission!'
                    />
                    {/* </Link> */}
                </div>
                {/* </Grid> */}
                <Grid className={classes.avatarCreator}>
                    <div className='col-mission'>
                        <img src={AvatarButton} alt='Create your Story Squad Avatar!' />
                    </div>
                </Grid>
                {/* </Grid> */}

                <Grid className={classes.bottomRow}>
                    <Grid className={classes.passport}>
                        <img src={PassportButton} alt='???' />
                    </Grid>
                    <Grid className={classes.trophyRoom}>
                        <img
                            src={TrophyRoomButton}
                            alt='See who has the most victories and points!'
                        />
                    </Grid>
                </Grid>
            </main>
        </Container>
    );
};

export { ChildHome };
