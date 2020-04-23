import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - 260px)`,
            marginLeft: 260,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    spacer: {
        flex: '1',
    },
}));
