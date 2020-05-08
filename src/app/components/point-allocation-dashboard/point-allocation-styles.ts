import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        orangeButton: {
            'backgroundColor': '#FF6B35',
            'fontSize': '24px',
            'fontWeight': 'bold',
            'borderRadius': '10px',
            'color': 'white',
            'border': '3px solid #292929',
            'textTransform': 'capitalize',
            'fontFamily': 'nunito',
            '&:hover': {
                backgroundColor: '#FF6B35',
            },
        },
        avatarMargin: {
            backgroundColor: '#B5D33D',
            borderRight: '7px solid',
            borderLeft: '7px solid',
            height: '380px',
        },
        topContainer: {
            paddingTop: '75px',
            border: '7px solid #000',
            backgroundColor: '#EB7D5B',
            height: '380px',
            [theme.breakpoints.down('sm')]: {
                height: '700px',
            },
        },
        bottomContainer: {
            paddingTop: '75px',
            border: '7px solid #000',
            borderBottom: '0px',
            backgroundColor: '#FED23F',
            height: '380px',
            [theme.breakpoints.down('sm')]: {
                height: '700px',
            },
        },
        button: {
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItem: 'center',
            width: '100%',
            alignItems: 'center',
        },
        disabledBtn: {
            pointerEvents: 'none',
            backgroundColor: 'slateGrey',
            color: 'white',
        },
        backDiv: {
            border: '7px solid #000',
            borderTop: '0px',
            backgroundColor: '#B5D33D',
            padding: '20px',
            [theme.breakpoints.down('sm')]: {
                backgroundColor: '#FED23F',
                borderRight: '0px',
            },
        },
        nextDiv: {
            border: '7px solid #000',
            borderTop: '0px',
            backgroundColor: '#FED23F',
            padding: '20px',
            [theme.breakpoints.down('sm')]: {
                borderLeft: '0px',
            },
        },
        waiting: {
            'fontSize': '2.8em',
            'color': 'tomato',
            'fontFamily': 'Bangers',
            '-webkit-text-stroke': '1.6px black',
        },
    })
);
