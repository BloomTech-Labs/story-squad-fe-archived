import { makeStyles } from '@material-ui/core/styles';
import picIcon from './icons/Draw.png';
import readIcon from './icons/read.png';
import writeIcon from './icons/write.png';
import cityscape from './icons/cityscape.png';
import 'typeface-bangers';

export const useStyles = makeStyles((theme) => ({
    // wrapper / container styles
    containerStyle: {
        alignSelf: 'center',
        width: '100%',
        height: '100vh',
    },
    columnFlex: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.only('sm')]: {
            width: '100%',
        },
    },
    contentContainer: {
        display: 'flex',
        border: '3.5px solid black',
        flexDirection: 'row',
        [theme.breakpoints.only('sm')]: {
            flexDirection: 'row',
            width: '100%',
        },
    },
    writeDrawDiv: {
        width: '60%',
        [theme.breakpoints.only('sm')]: {
            width: '100%',
        },
    },
    // read styles
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
    readIconHeight: {
        height: '65%',
    },
    readIconDiv: {
        width: '180px',
        height: '200px',
        backgroundImage: `url(${readIcon})`,
        backgroundRepeat: 'no-repeat',
    },
    readCheckBox: {
        alignSelf: 'flex-end',
        justifyContent: 'space-around',
        transform: 'scale(3)',
        padding: '10px',
    },
    // write styles
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
    writeIconDiv: {
        width: '210px',
        height: '210px',
        backgroundImage: `url(${writeIcon})`,
        backgroundRepeat: 'no-repeat',
    },
    writeCheckBox: {
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        transform: 'scale(3)',
        padding: '10px',
    },
    // draw styles
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
    drawIconDiv: {
        width: '210px',
        height: '210px',
        backgroundImage: `url(${picIcon})`,
        backgroundRepeat: 'no-repeat',
    },
    drawCheckBox: {
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
    // button styles
    buttonDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
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
    // modal styles
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
