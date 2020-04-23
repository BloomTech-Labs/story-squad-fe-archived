import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    card: {},
    cardHeader: {
        '& .MuiCardHeader-action': {
            [theme.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    },
}));
