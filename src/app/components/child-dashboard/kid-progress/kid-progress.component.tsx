import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Card, Button, Typography, Checkbox } from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Child } from '../../../models';
import { useAPI } from '../../../hooks';
import 'typeface-bangers';
import picIcon from './icons/Draw.png';
import readIcon from './icons/Read.png';
import writeIcon from './icons/Write.png';
import cityscape from './icons/cityscape.png';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

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
    title: {
        marginRight: theme.spacing(2),
    },
    progress: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 800,
        flexGrow: 1,
        height: theme.spacing(1),
        borderRadius: 30,
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
        'borderRadius': '100px',
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
        'marginLeft': '770px',
        'marginBottom': '140px',
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
        justifyContent: 'center',
        padding: '25px',
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
    headerBorder: {
        border: '4px solid #292929',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '229px',
    },
    appBar: {
        height: '229px',
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
        marginTop: '229px',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: theme.spacing(3),
    },
    welcome: {
        marginBottom: theme.spacing(2),
    },
    columnFlex: {
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
        margin: '0 auto',
    },
    btn: {
        marginBottom: 'px',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    toolbar: theme.mixins.toolbar,
}));

interface KidProgressProps {
    onUpdate?: () => void;
    child: Child;
}

const KidProgressCard: React.FC<KidProgressProps> = ({ child, onUpdate }) => {
    const classes = useStyles({});
    const [response, loading, request] = useAPI('/children/progress', 'POST');
    const logout = () => window.dispatchEvent(new Event('logout'));
    const [menu, setMenu] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setMenu((prevMenu) => !prevMenu);
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

    const { cohort, progress, username } = child;
    const { dueDates: dueDateStrings } = cohort;
    const dueDates = Object.fromEntries(
        Object.entries(dueDateStrings).map(([key, date]) => [key, moment(date)])
    );

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
                        <div className={classes.btn}>
                            {' '}
                            <Button
                                ref={anchorRef}
                                aria-controls={menu ? 'menu-list-grow' : undefined}
                                aria-haspopup='true'
                                className={classes.logoutButton}
                                onClick={handleToggle}>
                                Menu
                            </Button>
                        </div>
                    </div>

                    <div className={classes.grid}>
                        <div className={classes.read}>
                            <Checkbox checked={progress.reading} className={classes.alignRight} />
                            <Link
                                to={`/story/${cohort.week}`}
                                onClick={() => request({ reading: true })}>
                                <div className={classes.readIconDiv}></div>
                            </Link>
                        </div>
                        <div className={classes.writeDrawDiv}>
                            <div className={classes.write}>
                                <Checkbox
                                    checked={progress.writing}
                                    className={classes.alignRight}
                                />
                                <Link to={`/kids-dashboard/upload`}>
                                    <div className={classes.writeIconDiv}></div>
                                </Link>
                            </div>
                            <div className={classes.draw}>
                                <Checkbox
                                    checked={progress.writing}
                                    className={classes.alignRight}
                                />
                                <Link to={`/kids-dashboard/drawing-upload`}>
                                    <div className={classes.drawIconDiv}></div>
                                </Link>
                                <Link to={`/kids-dashboard/points-dashboard`}>
                                    <Button className={classes.orangeButton} type='button'>
                                        Next Step!
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Card>
        </>
    );
};
export { KidProgressCard };
