import { makeStyles } from '@material-ui/core/styles';
import cityscape from '../../../../pages/child-dashboard/icons/cityscape.png';
export const useStyles = makeStyles((theme) => ({
    header: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        borderBottom: '7px solid #000000',
    },
    card: {
        borderLeft: '7px solid #000000',
        borderBottom: '7px solid #000000',
        borderRight: '7px solid #000000',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
    },
    form: {
        margin: '0 auto',
        width: '50%',
    },
    preview: {
        height: 200,
        width: 200,
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    orangeButton: {
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
    buttonText: {
        fontSize: '24px',
        fontWeight: 'bold',
        fontFamily: 'nunito',
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
    },
    headerFont: {
        'fontFamily': 'Bangers',
        'color': '#FFFFFF',
        'fontSize': '86px',
        'fontWeight': 'bold',
        '-webkit-text-stroke-width': '1px',
        '-webkit-text-stroke-color': '#000000',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    promptText: {
        fontFamily: 'nunito',
        fontSize: '36px',
        fontWeight: 'normal',
        color: '#292929',
    },
}));
