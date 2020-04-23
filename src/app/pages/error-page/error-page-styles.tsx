import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
    },
    content: {
        margin: theme.spacing(3),
    },
    image: {},
    button: {
        margin: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
    },
}));
