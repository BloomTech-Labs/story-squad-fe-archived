import explode from '../../point-allocation-dashboard/img/expl.png';
import cityscape from '../kid-progress/icons/cityscape.png';
import { makeStyles } from '@material-ui/core/styles';
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
    grid: {
        display: 'flex',
        border: '7px solid black',
        height: '600px',
    },
    gridItem: {
        margin: theme.spacing(1.5),
    },
    orangeButton: {
        'position': 'absolute',
        'top': '718px',
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
    height50: {
        height: '65%',
    },
    teammate: {
        backgroundColor: '#FED23F',
        width: '100%',
        height: '100%',
        border: '7px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    draw: {
        backgroundColor: '#B5D33D',
        width: '100%',
        height: '100%',
        border: '7px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    writeDrawDiv: {
        width: '60%',
    },
    avatarDiv: {
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${explode})`,
        backgroundRepeat: 'no-repeat',
        alignSelf: 'center',
        alignItems: 'center',

        backgroundPosition: 'center',
        flexDirection: 'column',
    },
    avatar1: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundPosition: 'center',
    },
    avatar2: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundPosition: 'center',
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
    username: {
        fontFamily: 'Bangers',
        color: '#000000',
        backgroundColor: 'white',
        fontSize: '26px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2%',
        borderRadius: '10px',
    },
    toolbar: theme.mixins.toolbar,
}));
