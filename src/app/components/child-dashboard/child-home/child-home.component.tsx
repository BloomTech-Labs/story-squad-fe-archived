import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
    Card,
    Button,
    Checkbox,
    Paper,
    Popper,
    MenuItem,
    MenuList,
    Fade,
    Modal,
    Backdrop,
    Grow,
    ClickAwayListener,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Child } from '../../../models';
import 'typeface-bangers';
import picIcon from '../kid-progress/icons/Draw.png';
import readIcon from '../kid-progress/icons/read.png';
import writeIcon from '../kid-progress/icons/write.png';
import cityscape from '../kid-progress/icons/cityscape.png';

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
        'alignItems': 'right',
        'marginTop': '20px',
        'backgroundColor': '#FF6B35',
        'fontSize': '24px',
        'fontWeight': 'bold',
        'borderRadius': '10px',
        'color': 'white',
        'width': '200px',
        'border': '3px solid #292929',
        'textTransform': 'capitalize',
        'fontFamily': 'nunito',
        '&:hover': {
            backgroundColor: '#FF6B35',
        },
    },
    logoutButton: {
        alignSelf: 'flex-end',
        justifyContent: 'space-around',
        marginRight: '2%',
        marginTop: '2%',
    },
    logoutMenu: {
        backgroundColor: '#FF6B35',
        color: 'black',
        border: '2px solid #292929',
    },
    read: {
        backgroundColor: '#B5D33D',
        width: '40%',
        border: '7px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '25px',
    },
    height50: {
        height: '65%',
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
        width: '210px',
        height: '210px',
        backgroundImage: `url(${picIcon})`,
        backgroundRepeat: 'no-repeat',
    },
    readIconDiv: {
        width: '180px',
        height: '200px',
        backgroundImage: `url(${readIcon})`,
        backgroundRepeat: 'no-repeat',
    },
    writeIconDiv: {
        width: '210px',
        height: '210px',
        backgroundImage: `url(${writeIcon})`,
        backgroundRepeat: 'no-repeat',
    },
    alignRight: {
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        transform: 'scale(3)',
        padding: '10px',
    },
    alignRightTop: {
        alignSelf: 'flex-end',
        justifyContent: 'space-around',
        transform: 'scale(3)',
        padding: '10px',
    },
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },
    headerFont: {
        'fontFamily': 'Bangers',
        'fontSize': '86px',
        'fontWeight': 'bold',
        '-webkit-text-stroke-width': '1px',
        '-webkit-text-stroke-color': '#292929',
        'color': '#ffffff',
    },
    modalFont: {
        fontFamily: 'Bangers',
        fontWeight: 'bold',
        fontSize: '120%',
        color: 'black',
    },
    modalBtn: {
        fontFamily: 'Bangers',
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: '#FF6B35',

        textTransform: 'capitalize',
        border: '2px solid #292929',
    },
    headerBorder: {
        border: '4px solid #292929',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    appBar: {
        height: '206px',
        backgroundColor: '#6CEAE6',
        backgroundImage: `url(${cityscape})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '101% 103%',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        border: '7px solid black',
    },
    spacer: {
        flexGrow: 1,
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },

    columnFlex: {
        display: 'flex',
        flexDirection: 'column',
    },
    buttonDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
    },
    btn: {
        display: 'flex',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',

        padding: '10px',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalPaper: {
        backgroundColor: '#6CEAE6',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },

    toolbar: theme.mixins.toolbar,
}));

interface ChildHomeProps {
    onUpdate?: () => void;
    child: Child;
}

const ChildHome: React.FC<ChildHomeProps> = ({ child, onUpdate }) => {
    const classes = useStyles({});
    const logout = () => window.dispatchEvent(new Event('logout'));
    const [menu, setMenu] = React.useState(false);
    const anchorRef = React.useRef<SVGSVGElement>(null);
    const [open, setOpen] = React.useState(false);

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
        <>
            <Card className={classes.card}>
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
                <section className={classes.columnFlex}>
                    <div className={classes.appBar}>
                        <div className={classes.headerFont}>Mission</div>
                        <MenuIcon
                            fontSize='large'
                            className={classes.logoutButton}
                            ref={anchorRef}
                            aria-controls={menu ? 'menu-list-grow' : undefined}
                            aria-haspopup='true'
                            onClick={handleToggle}
                        />
                    </div>

                    <div className={classes.grid}>
                        <div className={classes.read}>
                            <div className={classes.height50}>
                                <div className={classes.readIconDiv}></div>
                            </div>
                        </div>
                        <div className={classes.writeDrawDiv}>
                            <div className={classes.write}>
                                <Link to={`/kids-dashboard/upload`}>
                                    <div className={classes.writeIconDiv}></div>
                                </Link>
                            </div>
                            <div className={classes.draw}>
                                <Link to={`/kids-dashboard/drawing-upload`}>
                                    <div className={classes.drawIconDiv}></div>
                                </Link>
                                <Link to={`/kids-dashboard/team-join`}>
                                    <Button className={classes.orangeButton} type='button'>
                                        TEAM UP!
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Card>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                className={classes.modal}
                open={open}
                onClose={modalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={open}>
                    <div className={classes.modalPaper}>
                        <h2 id='transition-modal-title' className={classes.modalFont}>
                            Welcome to Story Squad!
                        </h2>{' '}
                        >
                    </div>
                </Fade>
            </Modal>
        </>
    );
};
export { ChildHome };
