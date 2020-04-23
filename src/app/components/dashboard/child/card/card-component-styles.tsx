import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import avatar from './avatars/Hero19.png';
export const useStyles = makeStyles((theme) => ({
    card: {
        width: '340px',
        borderRadius: '15px',
        backgroundColor: '#D0F2EC',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusIcons: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    header: {
        'backgroundColor': theme.palette.primary.main,
        'color': 'white',
        'alignItems': 'center',
        '& > .MuiCardHeader-action': {
            margin: 0,
            marginTop: theme.spacing(0.75),
        },
    },
    titleBar: {
        display: 'flex',
    },
    title: {
        marginLeft: theme.spacing(7),
        lineHeight: '2.5rem',
    },
    progress: {},
    progressBackground: {
        position: 'absolute',
        color: theme.palette.grey[500],
        opacity: 0.2,
    },
    progressForeground: {
        position: 'absolute',
        color: theme.palette.secondary.main,
    },
    actionButton: {},
    actions: {
        display: 'flex',
        justifyContent: 'flex-end',
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
        marginTop: -24,
        marginLeft: -12,
    },
    avatarDiv: {
        height: '150px',
        width: '100px',
        backgroundImage: `url(${avatar})`,
        backgroundSize: 'cover',
        display: 'inline-block',
    },
    childProgBtn: {
        fontSize: '30px',
        fontFamily: 'bangers',
        color: 'white',
        backgroundColor: '#007AFF',
        borderRadius: '14px',
        padding: '0 20px',
    },
    usernameDiv: {
        'fontSize': '36px',
        'display': 'inline-block',
        'marginLeft': '10px',
        'fontFamily': 'bangers',
        'color': '#0267C1',
        '-webkit-text-stroke-width': '1px',
        '-webkit-text-stroke-color': '#ff6d3a',
    },
}));
