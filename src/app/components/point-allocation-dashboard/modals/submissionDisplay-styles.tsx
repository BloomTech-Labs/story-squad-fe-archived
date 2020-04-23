import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

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
            fontFamily: 'nunito',
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
            fontFamily: 'Bangers',
            fontSize: '48px',
            fontWeight: 'bold',
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
