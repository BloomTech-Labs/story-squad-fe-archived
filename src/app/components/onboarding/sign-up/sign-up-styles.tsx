import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        minHeight: 400,
        marginTop: '-100px',
    },
    checkboxes: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        display: 'flex',
        alignItems: 'center',
    },
    multiline: {
        lineHeight: 1.3,
    },
    link: {
        color: 'black',
        textDecoration: 'underline',
        paddingTop: '8px',
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
    signInBtn: {
        backgroundColor: '#007AFF',
        borderRadius: '14px',
        fontFamily: 'nunito',
        color: 'white',
    },
}));
