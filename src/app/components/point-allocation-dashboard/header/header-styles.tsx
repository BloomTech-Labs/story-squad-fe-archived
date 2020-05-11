import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import cityscape from '../../child-dashboard/kid-progress/icons/cityscape.png';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        h2Styling: {
            'fontFamily': 'Bangers',
            'color': '#FFFFFF',
            'fontSize': '86px',
            'fontWeight': 'bold',
            'textAlign': 'center',
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': '#000000',
            [theme.breakpoints.down('sm')]: {
                fontSize: '42px',
            },
        },
        h3Styling: {
            'fontFamily': 'Bangers',
            'color': '#FFFFFF',
            'fontSize': '48px',
            'fontWeight': 'bold',
            'textAlign': 'center',
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': '#000000',
            [theme.breakpoints.down('sm')]: {
                fontSize: '32px',
            },
            'lineHeight': '3.5rem',
        },
        red: {
            color: 'red',
        },
        appBar: {
            height: '200px',
            width: '100%',
            backgroundColor: '#6CEAE6',
            backgroundImage: `url(${cityscape})`,
            backgroundRepeat: 'no-repeat',
            border: '7px solid #000000',
            backgroundSize: '101% 103%',
            display: 'flex',
            justifyContent: 'space-evenly',
        },
        remaining: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '2%',
        },
        menuBtn: {
            marginRight: '3%',
        },
        pointsWaiting: {
            marginBottom: '11%',
        },
    })
);
