import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    header: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
    },
    content: {
        display: 'grid',
        gridGap: theme.spacing(3),
    },
    form: {
        margin: theme.spacing(2),
    },
    preview: {
        height: 400,
        width: 400,
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
    orangeButton: {
        'marginTop': '20px',
        'backgroundColor': '#FF6B35',
        'fontSize': '24px',
        'fontWeight': 'bold',
        'borderRadius': '50px',
        'color': 'white',
        'width': '200px',
        'height': '50px',
        'boxShadow': '0px 8px 0px #97300A',
        'textTransform': 'capitalize',
        'fontFamily': 'nunito',
        '&:hover': {
            backgroundColor: '#FF6B35',
        },
    },
}));
