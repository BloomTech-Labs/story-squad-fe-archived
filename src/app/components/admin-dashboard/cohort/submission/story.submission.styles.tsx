import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(() => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
    },
    flagged: {
        display: 'flex',
        margin: '0 auto',
        maxWidth: '25%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        margin: '1em',
        maxWidth: '60%',
    },
}));
