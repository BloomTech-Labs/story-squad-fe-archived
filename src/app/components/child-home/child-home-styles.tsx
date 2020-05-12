import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { url } from 'inspector';
import cityscape from '../child-dashboard/kid-progress/icons/cityscape.png';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        containerStyling: {
            alignSelf: 'center',
            width: '100%',
            height: '100vh',
        },
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
            // justifyContent: 'center',
            // padding: '25px',
            [theme.breakpoints.only('sm')]: {
                width: '100%',
            },
        },
        pictureHover: {
            // background: 'red',
            maxWidth: '100%',
            width: 'calc(100%-10vw)',
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
