import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(() => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '35vh',
        width: '100%',
        maxWidth: '80ch',
    },
    loading: {
        marginLeft: '1ch',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: '',
        alignItems: 'flex-end',
    },
    button: {
        margin: '1em',
    },
}));
