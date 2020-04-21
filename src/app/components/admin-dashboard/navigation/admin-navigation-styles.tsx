import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
export const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerItem: {
        color: 'black',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'center',
    },
    icon: {
        marginRight: theme.spacing(1),
    },
}));
