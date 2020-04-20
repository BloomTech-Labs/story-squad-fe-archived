import { makeStyles } from '@material-ui/core/styles';
import 'typeface-nunito';
import 'typeface-bangers';

export const useStyles = makeStyles((theme) => ({
    centerDiv: {
        width: '50%',
        paddingLeft: '200px',
        margin: '0 auto',
        fontFamily: 'nunito',
    },
    flex: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    helpFont: {
        'textAlign': 'center',
        'marginTop': '32px',
        'marginBottom': '-50px',
        'fontFamily': 'bangers',
        'color': '#0267C1',
        'fontSize': '48px',
        '-webkit-text-stroke-width': '1px',
        '-webkit-text-stroke-color': '#ff6d3a',
    },
    normalWeight: {
        fontWeight: 'normal',
    },
}));
