import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        marginTop: theme.spacing(3),
        display: 'grid',
        gridGap: theme.spacing(4),
        gridTemplateColumns: '1fr',
        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: '1fr 1fr',
        },
    },
    empty: {
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'center',
        'alignItems': 'center',
        '& > .MuiIcon-fontSizeLarge': {
            fontSize: 320,
        },
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    headerFont: {
        'fontFamily': 'bangers',
        'fontSize': '48px',
        'color': '#0267C1',
        '-webkit-text-stroke-width': '1px',
        '-webkit-text-stroke-color': '#ff6d3a',
    },
    addChild: {
        width: '340px',
        height: '176px',
        borderRadius: '15px',
        backgroundColor: '#D0F2EC',
        marginTop: '20px',
        fontFamily: 'nunito',
        fontSize: '36px',
        textTransform: 'none',
    },
}));
