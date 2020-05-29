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
            width: 400,
            position: 'absolute',
            boxShadow: theme.shadows[5],
        },

        badge: {
            alignSelf: 'center',
            position: 'absolute',
            left: 0,
            padding: theme.spacing(2),
        },
        imagePreview: {
            width: '150px',
            height: '90px',
            borderRadius: '10px',
            cursor: 'pointer',
        },
        imageUnlocked: {
            // width: '150px',
            // height: '90px',
            borderRadius: '20px',
            cursor: 'pointer',
            border: '3px solid lightgreen',
        },
        gridContainer: {
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
        },
        // Modal styling below
        storyPages: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            width: '100%',
        },
        submissionHeader: {
            textAlign: 'center',
            textTransform: 'capitalize',
        },
        thumbnail: {
            alignItems: 'center',
            alignContent: 'center',
            width: '30%',
            borderRadius: '10px',
        },
        viewPageDiv: {
            'display': 'flex',
            'justifyContent': 'center',
            '&& img': {
                maxWidth: '70%',
                width: '70%',
            },
        },
        submissionImg: {
            maxWidth: '70%',
        },
        iconBox: {
            width: '5vh',
            height: '10vh',
            margin: '0 auto',
        },
        unlocked: {
            width: '50%',
            height: '30%',
            position: 'absolute',
            top: '56%',
            left: '80%',
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
            zIndex: 1,
        },
    })
);
