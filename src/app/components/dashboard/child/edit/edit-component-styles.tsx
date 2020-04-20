
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
        'backgroundColor': theme.palette.primary.main,
        'color': theme.palette.primary.contrastText,
        '& > .MuiCardHeader-action': {
            margin: 0,
        },
    },
    actionButton: {
        height: theme.spacing(4),
    },
    form: {
        display: 'grid',
        gridGap: theme.spacing(3),
    },
    preferences: {
        display: 'grid',
        gridGap: theme.spacing(3),
        gridTemplateColumns: 'repeat(auto-fit, 250px)',
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(3),
        right: theme.spacing(3),
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
}));
