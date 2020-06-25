import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import key from './img/Key.png';
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        containerStyling: {
            fontFamily: 'nunito',
            height: '100vh',
            boxSizing: 'border-box',
        },
        topRow: {
            display: 'flex',
        },
        bottomRow: {
            display: 'flex',
        },
        nameRowBig: {
            padding: '0 10% 0 10%',
        },
        nameRowSmall: {
            padding: '0 7% 0 7%',
        },
        totalScoreBig: {
            'display': 'flex',
            'flexDirection': 'column',
            'justifyContent': 'center',
            'fontFamily': 'Nunito',
            'fontStyle': 'normal',
            'fontWeight': 'bold',
            'fontSize': '26px',
            'color': '#FFFFFF',
            'marginTop': '27%',
            'marginRight': '5%',
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': '#000000',
        },
        totalScoreSmall: {
            'display': 'flex',
            'flexDirection': 'column',
            'justifyContent': 'center',
            'fontFamily': 'Nunito',
            'fontStyle': 'normal',
            'fontWeight': 'bold',
            'fontSize': '26px',
            'color': '#FFFFFF',
            'marginTop': '33%',
            'marginRight': '5%',
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': '#000000',
        },
        story1: {
            position: 'relative',
            backgroundColor: '#B5D33D',
            width: '55%',
            height: '37vh',
            border: '3.5px solid black',
            borderRight: '3.5px solid black',
            borderLeft: 'solid black 7px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            [theme.breakpoints.only('sm')]: {
                width: '100%',
            },
            background: 'url({ vsImg })',
        },
        story2: {
            position: 'relative',
            backgroundColor: '#EB7D5B',
            width: '45%',
            height: '37vh',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '3.5px solid black',
            borderLeft: '3.5px solid black',
            borderRight: '7px solid black',
            boxSizing: 'border-box',
            [theme.breakpoints.only('sm')]: {
                width: '100%',
            },
        },
        picture1: {
            position: 'relative',
            backgroundColor: '#FED23F',
            width: '45%',
            height: '37vh',
            border: '3.5px solid black',
            borderLeft: '7px solid black',
            borderBottom: '7px solid black',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            [theme.breakpoints.only('sm')]: {
                width: '100%',
            },
        },
        picture2: {
            position: 'relative',
            background: '#429CB5',
            width: '55%',
            height: '37vh',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '3.5px solid black',
            borderRight: '7px solid black',
            borderBottom: '7px solid black',
            boxSizing: 'border-box',
            [theme.breakpoints.only('sm')]: {
                width: '100%',
            },
        },
        // versusRound styles
        // located here as conditional styling for totalScore divs wouldn't work if styles located n /// versusRound folder
        leftPlayer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '50%',
            height: '100%',
            padding: '0',
        },
        leftHero: {
            display: 'flex',
            marginTop: '3%',
            marginBottom: '35px',
            marginRight: '50%',
            position: 'relative',
        },
        badge: {
            position: 'absolute',
            cursor: 'pointer',
            top: '12px',
            left: '12px',
        },
        rightPlayer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '50%',
            height: '100%',
            position: 'relative',
        },
        rightHero: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '3%',
            marginBottom: '35px',
            marginLeft: '50%',
            position: 'relative',
        },
        avatarStyle: {
            height: '70px',
            width: '70px',
            padding: '10px',
            position: 'relative',
        },
        playerName: {
            fontFamily: 'Bangers',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '24px',
            lineHeight: '26px',
            color: '#292929',
            position: 'absolute',
            top: '20px',
            left: '75px',
        },
        playerNameRight: {
            fontFamily: 'Bangers',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '24px',
            lineHeight: '26px',
            color: '#292929',
            position: 'absolute',
            top: '20px',
            right: '75px',
        },
        lightningboi: {
            display: 'block',
            position: 'relative',
            top: '45px',
            left: '50%',
            transform: 'translate(-50%, -17.75%)',
            zIndex: 10,
            height: '80%',
        },
        vs: {
            height: '88%',
            position: 'absolute',
            zIndex: 10,
        },
        imagePreview: {
            width: '150px',
            height: '90px',
            borderRadius: '10px',
            cursor: 'pointer',
            filter: 'blur(2.5px)',
            border: '4px solid red',
        },
        imageHolder: {
            position: 'relative',
        },
        gridContainer: {
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
        },
        lockKey: {
            cursor: `URL(${key}) 2 26, default`,
        },
        lock: {
            display: 'block',
            position: 'relative',
            top: '45px',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        totalScore: {
            'display': 'flex',
            'flexDirection': 'row',
            'justifyContent': 'center',
            'position': 'absolute',
            'bottom': 0,
            'fontFamily': 'Nunito',
            'fontStyle': 'normal',
            'fontWeight': 'bold',
            'fontSize': '26px',
            'color': '#FFFFFF',
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': '#000000',
            'z-index': '10',
        },
        loss: {
            backgroundColor: 'gray',
        },
    })
);
