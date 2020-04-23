import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        minHeight: 300,
    },
    welcomeText: {
        fontSize: '36px',
        color: 'rgba(60, 60, 67, 0.6)',
        fontFamily: 'nunito',
        marginTop: '-60px',
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
    multiline: {
        lineHeight: 1.3,
    },
    link: {
        color: 'black',
        textDecoration: 'underline',
        paddingTop: '8px',
    },
    label: {
        display: 'flex',
        alignItems: 'center',
    },
    checkboxes: {
        display: 'flex',
        flexDirection: 'column',
    },
    signInBtn: {
        backgroundColor: '#007AFF',
        borderRadius: '14px',
        fontFamily: 'nunito',
    },
    fontOverride: {
        fontFamily: 'nunito',
        textTransform: 'none',
    },
}));
