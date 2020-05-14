import React from 'react';
import 'typeface-nunito';
import { useStyles } from './child-home-styles';
import { Container, Grid } from '@material-ui/core';
import { Child } from '../../models';
import { Link } from 'react-router-dom';
import AcceptMissionButton from './img/Accept-mission-button.png';
import AcceptBubble from './img/Rectangle 86.svg';
import AcceptText from './img/acceptText.svg';
import Trophy from './img/TrophyRoom.svg';
import AcceptSVG from './img/Group 164.svg';
import Avatar from './img/Avatar.svg';
import Passport from './img/Passport.svg';
import TrophyRoomButton from './img/Trophy-room-button.png';
import { KidHeader } from '../reusable-components';
import './styles.css';

const ChildHome: React.FC = () => {
    const classes = useStyles({});
    return (
        // <Container className={classes.containerStyling}>

        <div className='page'>
            <KidHeader />
            <main className='mission-main'>
                <Link className='col-big' to={'/kids-dashboard'}>
                    <div className='img-div '>
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
                    </div>
                </Link>
                <div className='img-div col-small'>
                    <img src={Avatar} alt='Create your Story Squad Avatar!' />
                </div>
                <div className='img-div col-small'>
                    <img src={Passport} alt='???' />
                </div>
                <div className='img-div col-big'>
                    <img src={Trophy} alt='See who has the most victories and points!' />
                </div>
            </main>
            {/* // </Container> */}
        </div>
    );
};

export { ChildHome };
