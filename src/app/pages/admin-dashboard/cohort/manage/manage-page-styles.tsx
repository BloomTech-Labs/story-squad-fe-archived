import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    loading: {
        marginLeft: '1ch',
    },
}));
