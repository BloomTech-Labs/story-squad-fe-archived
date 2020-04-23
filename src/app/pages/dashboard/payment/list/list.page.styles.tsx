import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    list: {
        marginTop: theme.spacing(2),
    },
    button: {
        borderRadius: theme.shape.borderRadius,
    },
}));
