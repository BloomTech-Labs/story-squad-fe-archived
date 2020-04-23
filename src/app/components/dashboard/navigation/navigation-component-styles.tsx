import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 260;
export const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(4),
    },
    menuItem: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(4),
    },
    icon: {
        marginRight: theme.spacing(4),
    },
    selected: {
        '& > .MuiListItem-root': {
            borderRight: `solid black ${theme.spacing(0.4)}px`,
        },
    },
}));
