import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import 'typeface-bangers';
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
        },
        root: {
            // fontFamily: 'nunito',
            display: 'flex',
            flexDirection: 'column',
        },
        gridContainer: {
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
        },
        gridRow: {
            height: '274px',
            backgroundColor: '#EB7D5B',
            paddingTop: '32px',
            padding: '30px',
        },
        gridInput: {
            backgroundColor: '#EB7D5B',
            padding: '53px ',
        },
        pointInput: {
            textAlign: 'center',
            fontFamily: 'Bangers',
            fontSize: '1.8em',
            fontWeight: 'bold',
            backgroundColor: 'white',
            width: '145px',
            borderRadius: '5px',
        },
        disabledInput: {
            textAlign: 'center',
            fontFamily: 'Bangers',
            fontSize: '1.8em',
            width: '145px',
            borderRadius: '5px',
            fontWeight: 'bold',
            backgroundColor: 'rgba(192,192,192,.7)',
            color: 'transparent',
        },
        imagePreview: {
            width: '175px',
            height: '175px',
            borderRadius: '14px',
        },
        viewPageDiv: {
            display: 'flex',
            justifyContent: 'center',
        },
        submissionHeader: {
            textAlign: 'center',
        },
        submissionImg: {
            maxWidth: '80%',
        },
        //
        storyPages: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            width: '100%',
        },
        thumbnail: {
            alignItems: 'center',
            alignContent: 'center',
            width: '30%',
            borderRadius: '10px',
        },
    })
);
