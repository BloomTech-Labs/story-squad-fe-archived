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
import { Child } from '../../../models';
import { useAPI } from '../../../hooks';
import 'typeface-bangers';
import picIcon from './icons/Draw.png';
import readIcon from './icons/read.png';
import writeIcon from './icons/write.png';
import cityscape from './icons/cityscape.png';

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
        'position': 'absolute',
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
        justifyContent: 'center',
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
        marginBottom: 'px',
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

interface KidProgressProps {
    onUpdate?: () => void;
    child: Child;
    progress: any;
}

const KidProgressCard: React.FC<KidProgressProps> = ({ child, onUpdate }) => {
    const classes = useStyles({});
    const [response, loading, request] = useAPI('/children/progress', 'POST');
    const logout = () => window.dispatchEvent(new Event('logout'));
    const [menu, setMenu] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
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

    React.useEffect(() => {
        if (response?.progress && onUpdate) onUpdate();
        if (response?.progress) response.progress = undefined;
    }, [onUpdate, response]);

    const { progress, cohort, username } = child;
    const { dueDates: dueDateStrings } = cohort;
    const dueDates = Object.fromEntries(
        Object.entries(dueDateStrings).map(([key, date]) => [key, moment(date)])
    );

    React.useEffect(() => {
        console.log(progress);
        if (progress.reading === false) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [progress, progress.reading]);
    return (
        <>
            <Card className={classes.card}>
                {/* Logout button */}
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
                {/* End of logout button */}
                <section className={classes.columnFlex}>
                    {/* Mission header */}
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
                    {/* End of mission header  */}
                    {/* Read / Write / Draw container */}
                    <div className={classes.grid}>
                        {/* Read section  */}
                        <div className={classes.read}>
                            {/* Read checkbox  */}
                            <Checkbox
                                checked={progress.reading}
                                className={classes.alignRightTop}
                                color='primary'
                            />
                            <div className={classes.height50}>
                                <Link
                                    to={`/story/${cohort.week}`}
                                    onClick={() => request({ reading: true })}>
                                    {/* Read icon  */}
                                    <div className={classes.readIconDiv}></div>
                                </Link>
                            </div>
                        </div>
                        {/* Write section  */}
                        <div className={classes.writeDrawDiv}>
                            <div className={classes.write}>
                                {/* Write checkbox  */}
                                <Checkbox
                                    checked={progress.writing}
                                    className={classes.alignRight}
                                    color='primary'
                                />
                                <Link to={`/kids-dashboard/upload`}>
                                    {/* Write icon  */}
                                    <div className={classes.writeIconDiv}></div>
                                </Link>
                            </div>
                            {/* Draw section  */}
                            <div className={classes.draw}>
                                {/* Draw checkbox  */}
                                <Checkbox
                                    checked={progress.drawing}
                                    className={classes.alignRight}
                                    color='primary'
                                />
                                <Link to={`/kids-dashboard/drawing-upload`}>
                                    {/* Draw icon  */}
                                    <div className={classes.drawIconDiv}></div>
                                </Link>
                                {/* Link + button to points allocation dashboard  */}
                                <Link to={`/kids-dashboard/points-dashboard`}>
                                    <Button className={classes.orangeButton} type='button'>
                                        TEAM UP!
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Card>
            {/* Conditional modal  */}
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
                        </h2>
                        <p id='transition-modal-description' className={classes.modalFont}>
                            To begin your journey, click the 'READ' icon to start the story!
                            <br />
                            Are you ready to accept the challenge?
                        </p>
                        <Button onClick={modalClose} className={classes.modalBtn}>
                            I accept!!
                        </Button>
                    </div>
                </Fade>
            </Modal>
        </>
    );
};
export { KidProgressCard };
