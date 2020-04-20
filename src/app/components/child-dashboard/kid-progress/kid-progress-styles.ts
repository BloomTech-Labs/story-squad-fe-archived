import { makeStyles } from '@material-ui/core/styles';
import picIcon from './icons/Draw.png';
import readIcon from './icons/read.png';
import writeIcon from './icons/write.png';
import cityscape from './icons/cityscape.png';
import 'typeface-bangers';

export const useStyles = makeStyles((theme) => ({
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
    displayFlex: {
        display: 'flex',
        border: '7px solid black',
        flexDirection: 'row',
        [theme.breakpoints.only('sm')]: {
            flexDirection: 'row',
            width: '100%',
        },
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
    grayButton: {
        'alignItems': 'right',
        'marginTop': '20px',
        'backgroundColor': '#D3D3D3',
        'fontSize': '24px',
        'fontWeight': 'bold',
        'borderRadius': '10px',
        'color': 'black',
        'width': '400px',
        'border': '3px solid #292929',
        'textTransform': 'capitalize',
        'fontFamily': 'nunito',
        '&:hover': {
            backgroundColor: '#D3D3D3',
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
        [theme.breakpoints.only('sm')]: {
            width: '100%',
        },
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
        [theme.breakpoints.only('sm')]: {
            width: '100%',
        },
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
        [theme.breakpoints.only('sm')]: {
            width: '100%',
        },
    },
    linkFont: {
        fontFamily: 'bangers',
        fontSize: '96px',
    },
    writeDrawDiv: {
        width: '60%',
        [theme.breakpoints.only('sm')]: {
            width: '100%',
        },
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
        fontFamily: 'nunito',
        fontWeight: 'bold',
        fontSize: '130%',
        color: 'black',
    },
    modalBtn: {
        fontFamily: 'nunito',
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: '#FF6B35',
        fontSize: '110%',
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
        [theme.breakpoints.only('sm')]: {
            width: '100%',
        },
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
