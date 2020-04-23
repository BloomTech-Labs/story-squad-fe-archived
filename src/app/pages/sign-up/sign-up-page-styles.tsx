import { makeStyles, useTheme } from '@material-ui/core/styles';
import cityscape from './images/cityscape.png';
export const useStyles = makeStyles((theme) => ({
    root: {
        background: `white`,
    },
    sidebar: {
        paddingTop: theme.spacing(6),
        flexGrow: 1,
        minHeight: '100vh',
        margin: 0,
        borderRadius: 0,
    },
    title: {
        'fontFamily': 'bangers',
        'fontSize': '72px',
        'color': '#ffffff',
        '-webkit-text-stroke-width': '3px',
        '-webkit-text-stroke-color': '#292929',
        'textAlign': 'center',
        'width': '100%',
        'height': '200px',
        'backgroundColor': '#6CEAE6',
        'backgroundImage': `url(${cityscape})`,
    },
    fontOverride: {
        fontFamily: 'nunito',
    },
    introText: {
        margin: '0 auto',
        width: '60%',
        color: '#292929',
        fontSize: '24px',
        fontFamily: 'nunito',
        fontWeight: 'lighter',
    },
    tabs: {
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4),

        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: theme.spacing(10),
            paddingRight: theme.spacing(10),
        },
        borderBottom: '1px solid gray',
    },
    onboarding: {
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4),

        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: theme.spacing(10),
            paddingRight: theme.spacing(10),
        },

        marginTop: theme.spacing(12),
    },
}));
