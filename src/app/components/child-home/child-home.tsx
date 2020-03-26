import React, { useState, useEffect } from 'react';
import 'typeface-nunito';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useStyles } from './child-home-styles';
import {
    Button,
    Typography,
    Container,
    Grid,
    Modal,
    Fade,
    Backdrop,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    CircularProgress,
    Card,
    Checkbox,
    Paper,
    Popper,
    MenuItem,
    MenuList,
    Grow,
    ClickAwayListener,
} from '@material-ui/core';
import { Child } from '../../models';
import { Link } from 'react-router-dom';
import { useForm, useAPI } from '../../hooks';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import AcceptMissionButton from './img/Accept-mission-button.png';
import AvatarButton from './img/Avatar-button.png';
import PassportButton from './img/Passport-button.png';
import TrophyRoomButton from './img/Trophy-room-button.png';

interface PointCardProps {
    child: Child;
}

const ChildHome: React.FC<PointCardProps> = ({ child }) => {
    const classes = useStyles({});
    // const logout = () => window.dispatchEvent(new Event('logout'));
    // const [menu, setMenu] = React.useState(false);
    // const anchorRef = React.useRef<HTMLButtonElement>(null);

    // const handleToggle = () => {
    //     setMenu((prevMenu) => !prevMenu);
    // };
    // const modalClose = () => {
    //     setOpen(false);
    // };
    // const handleClose = (event: React.MouseEvent<EventTarget>) => {
    //     if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
    //         return;
    //     }
    //     setMenu(false);
    // };

    // function handleListKeyDown(event: React.KeyboardEvent) {
    //     if (event.key === 'Tab') {
    //         event.preventDefault();
    //         setMenu(false);
    //     }
    // }

    // const prevMenu = React.useRef(menu);
    // React.useEffect(() => {
    //     if (prevMenu.current === true && menu === false) {
    //         anchorRef.current!.focus();
    //     }

    //     prevMenu.current = menu;
    // }, [menu]);
    return (
        <Container className={classes.containerStyling}>
            <Grid container>
                {/* Header code */}
                <Grid container direction='row' className={classes.appBar}>
                    <Grid container item justify='space-around' alignItems='center'>
                        <Typography className={classes.h2Styling} variant='h2'>
                            Story Squad
                        </Typography>
                        {/* <Popper
                            open={menu}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            transition
                            disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin:
                                            placement === 'bottom' ? 'center top' : 'center bottom',
                                    }}>
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList
                                                autoFocusItem={menu}
                                                id='menu-list-grow'
                                                onKeyDown={handleListKeyDown}
                                                className={classes.logoutMenu}>
                                                <MenuItem onClick={logout}>Logout</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                        <div className={classes.appBar}>
                            <div className={classes.headerFont}>Mission</div>
                            <div className={classes.btn}>
                                {' '}
                                {/* Menu button */}
                        {/* <Button
                            ref={anchorRef}
                            aria-controls={menu ? 'menu-list-grow' : undefined}
                            aria-haspopup='true'
                            className={classes.logoutButton}
                            onClick={handleToggle}>
                            Menu
                                </Button>
                        {/* End of menu button */}
                        {/* </div>
                        </div>  */}
                    </Grid>
                </Grid>
            </Grid>
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
