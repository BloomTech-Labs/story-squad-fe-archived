import React, { useState, useEffect } from 'react';
import 'typeface-nunito';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
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
import Splode from './img/splode.png';
import cityscape from '../child-dashboard/kid-progress/icons/cityscape.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            alignSelf: 'center',
            maxWidth: theme.breakpoints.values.md,
            width: '100%',
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        containerStyling: {
            fontFamily: 'nunito',
            height: '100vh',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        root: {
            fontFamily: 'nunito',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '510%',
        },
        h2Styling: {
            'fontFamily': 'Bangers',
            'color': '#FFFFFF',
            'fontSize': '86px',
            'fontWeight': 'bold',
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': '#000000',
        },
        appBar: {
            height: '22vh',
            width: '100%',
            backgroundColor: '#6CEAE6',
            backgroundImage: `url(${cityscape})`,
            backgroundRepeat: 'no-repeat',
            border: '7px solid #000000',
            backgroundSize: '101% 103%',
            display: 'flex',
            justifyContent: 'center',
        },
        logoutButton: {
            'marginLeft': '780px',
            'marginBottom': '105px',
            'backgroundColor': '#FF6B35',
            'fontSize': '24px',
            'fontWeight': 'bold',
            'borderRadius': '10px',
            'color': 'white',
            'width': '100px',
            'border': '3px solid #292929',
            'textTransform': 'capitalize',
            'fontFamily': 'nunito',
            '&:hover': {
                backgroundColor: '#FF6B35',
            },
        },
        logoutMenu: {
            'backgroundColor': '#FF6B35',
            'fontSize': '24px',
            'fontWeight': 'bold',
            'color': 'white',
            'width': '100px',
            'textTransform': 'capitalize',
            'border': '2px solid #292929',
            'fontFamily': 'nunito',
            '&:hover': {
                backgroundColor: '#FF6B35',
            },
        },
        // stuff from kid progress
        topRow: {
            display: 'flex',
        },
        bottomRow: {
            display: 'flex',
        },
        mission: {
            backgroundColor: '#B5D33D',
            width: '55%',
            height: '39vh',
            border: '3.5px solid black',
            borderLeft: 'solid black 7px',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '25px',
            [theme.breakpoints.only('sm')]: {
                width: '100%',
            },
        },
        pictureHover: {
            cursor: 'pointer',
        },
        avatarCreator: {
            backgroundColor: '#EB7D5B',
            width: '45%',
            height: '39vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '3.5px solid black',
            borderRight: 'solid black 7px',
            boxSizing: 'border-box',
            [theme.breakpoints.only('sm')]: {
                width: '100%',
            },
        },
        passport: {
            backgroundColor: '#FED23F',
            width: '45%',
            height: '39vh',
            border: '3.5px solid black',
            borderLeft: '7px solid black',
            borderBottom: '7px solid black',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '25px',
            [theme.breakpoints.only('sm')]: {
                width: '100%',
            },
        },
        trophyRoom: {
            background: '#429CB5',
            width: '55%',
            height: '39vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '3.5px solid black',
            borderRight: '7px solid black',
            borderBottom: '7px solid black',
            boxSizing: 'border-box',
            [theme.breakpoints.only('sm')]: {
                width: '100%',
            },
        },
    })
);

interface PointCardProps {
    child: Child;
}

const ChildHome: React.FC<PointCardProps> = ({ child }) => {
    const classes = useStyles({});
    const logout = () => window.dispatchEvent(new Event('logout'));
    const [menu, setMenu] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setMenu((prevMenu) => !prevMenu);
    };
    const modalClose = () => {
        setOpen(false);
    };
    const handleClose = (event: React.MouseEvent<EventTarget>) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }
        setMenu(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setMenu(false);
        }
    }

    const prevMenu = React.useRef(menu);
    React.useEffect(() => {
        if (prevMenu.current === true && menu === false) {
            anchorRef.current!.focus();
        }

        prevMenu.current = menu;
    }, [menu]);
    return (
        <Container className={classes.containerStyling}>
            <Grid container>
                {/* Header code */}
                <Grid container direction='row' className={classes.appBar}>
                    <Grid container item justify='space-around' alignItems='center'>
                        <Typography className={classes.h2Styling} variant='h2'>
                            Story Squad
                        </Typography>
                        <Popper
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
                                <Button
                                    ref={anchorRef}
                                    aria-controls={menu ? 'menu-list-grow' : undefined}
                                    aria-haspopup='true'
                                    className={classes.logoutButton}
                                    onClick={handleToggle}>
                                    Menu
                                </Button>
                                {/* End of menu button */}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.topRow}>
                <Grid className={classes.mission}>
                    <Link to={'/kids-mission'}>
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
