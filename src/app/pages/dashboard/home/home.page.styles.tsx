import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
    },
    content: {
        display: 'grid',
        gridTemplate: `
            "header header" auto
            "children children" auto`,
        gridTemplateColumns: '1fr 1fr',
        gridGap: theme.spacing(3),
    },
    header: {
        gridArea: 'header',
    },
    children: {
        gridArea: 'children',
    },
}));
