import { makeStyles } from '@material-ui/core/styles';
import explode from '../../point-allocation-dashboard/img/expl.png';
import 'typeface-bangers';
export const useStyles = makeStyles((theme) => ({
    containerStyle: {
        alignSelf: 'center',
        width: '100%',
        // height: '100vh',
    },
    grid: {
        display: 'flex',

        // height: '74vh',
    },
    player: {
        backgroundColor: '#B5D33D',
        width: '100%',
        // height: '100%',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    teammate: {
        backgroundColor: '#FED23F',
        width: '100%',
        // height: '100%',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarDiv: {
        display: 'flex',
        width: '100%',
        // height: '100%',
        backgroundImage: `url(${explode})`,
        backgroundRepeat: 'no-repeat',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundPosition: 'center',
        flexDirection: 'column',
    },
    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundPosition: 'center',
    },
    username: {
        fontFamily: 'Bangers',
        color: '#000000',
        backgroundColor: 'white',
        fontSize: '26px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2%',
    },
    navButton: {
        'backgroundColor': '#FF6B35',
        'fontSize': '24px',
        'fontWeight': 'bold',
        'borderRadius': '10px',
        'color': 'white',
        'width': '200px',
        'border': '3px solid #292929',
        'textTransform': 'capitalize',
        'fontFamily': 'nunito',
        'marginBottom': '5%',
        '&:hover': {
            backgroundColor: '#FF6B35',
        },
    },
}));
