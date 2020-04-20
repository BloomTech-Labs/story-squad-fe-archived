import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { url } from 'inspector';
import cityscape from '../child-dashboard/kid-progress/icons/cityscape.png';

export const useStyles = makeStyles((theme: Theme) =>
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
            height: '26vh',
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
            'marginLeft': '95%',
            'marginBottom': '100%',
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
        childHomeMenuBtn: {},
        topRow: {
            display: 'flex',
        },
        bottomRow: {
            display: 'flex',
        },
        mission: {
            backgroundColor: '#B5D33D',
            width: '55%',
            height: '37vh',
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
            height: '37vh',
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
            height: '37vh',
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
            height: '37vh',
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
