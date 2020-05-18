import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import cityscape from '../child-dashboard/kid-progress/icons/cityscape.png';
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            // height: '26vh',
            width: '100%',
            backgroundColor: '#6CEAE6',
            backgroundImage: `url(${cityscape})`,
            backgroundRepeat: 'no-repeat',
            border: '7px solid #000000',
            backgroundSize: '101% 103%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        h2Styling: {
            'fontFamily': 'Bangers',
            'color': '#FFFFFF',
            'fontSize': '4rem',
            'fontWeight': 'bold',
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': '#000000',
            'textAlign': 'center',
        },
        h3Styling: {
            'fontFamily': 'Bangers',
            'color': '#FFFFFF',
            'fontSize': '5.2rem',
            'fontWeight': 'bold',
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': '#000000',
            'textAlign': 'center',
        },
        headerMenuDiv: {
            display: 'flex',
            flexDirection: 'column',
            height: '26vh',
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        upperHeaderButtonDiv: {
            display: 'flex',
            height: '23vh',
            alignItems: 'flex-start',
            width: '10%',
        },
        upperTitleDiv: {
            display: 'flex',
            height: '25vh',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            width: '60%',
            marginRight: '25%',
            marginBottom: '5%',
        },
        holdingContainer: {
            backgroundColor: '#6CEAE6',
            border: '7px solid black',
            borderTop: 0,
            height: '74vh',
            width: '100%',
        },
        txtDiv: {
            marginTop: '25%',
        },
        mainDiv: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    })
);
