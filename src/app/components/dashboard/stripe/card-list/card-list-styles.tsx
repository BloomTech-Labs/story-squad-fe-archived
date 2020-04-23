import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    list: {
        display: 'grid',
        gridGap: theme.spacing(1),
        gridTemplateColumns: '1fr',
        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: '1fr 1fr',
        },
    },
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    empty: {
        'overflow': 'hidden',
        'maxWidth': '100%',
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'center',
        'alignItems': 'center',
        '& > .MuiIcon-fontSizeLarge': {
            fontSize: 320,
        },
    },
}));
